import { createServer } from 'http';

import { logger, jsonMiddleware } from './middleware.js';

import {
  getUsersHandler,
  getUserByIdHandler,
  createUserHandler,
  notFoundHandler,
} from './handlers.js';

const PORT = process.env.PORT || 3000;

const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === '/api/users' && req.method === 'GET') {
        getUsersHandler(req, res);
      } else if (req.url.match(/\/api\/users\/\d+/) && req.method === 'GET') {
        const userId = req.url.split('/')[3];
        console.log(`Fetching user with ID: ${userId}`);
        getUserByIdHandler(req, res, userId);
      } else if (req.url === '/api/users' && req.method === 'POST') {
        createUserHandler(req, res);
      } else {
        notFoundHandler(req, res);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

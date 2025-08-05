import { users } from './dbRepository.js'; // Importing users data

// Route handler for /api/users
const getUsersHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

// Route handler for /api/users/:id
const getUserByIdHandler = (req, res, id) => {
  const user = users.find((u) => u.id === parseInt(id));
  console.log('found user:', user);
  if (user) {
    res.write(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: 'User not found' }));
  }
  res.end();
};

// Route handler for /api/users
const createUserHandler = (req, res) => {
  let body = '';
  // Listen for data chunks
  req.on('data', (chunk) => {
    body += chunk.toString(); // Convert Buffer to string
  });
  console.log('Creating user with body:', body);
  req.on('end', () => {
    const newUser = JSON.parse(body);
    users.push(newUser);
    res.statusCode = 201; // Created
    res.write(JSON.stringify(newUser));
    res.end();
  });
};

// Route handle for Not Found
const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({ message: 'Route Not Found' }));
  res.end();
};

export {
  getUsersHandler,
  getUserByIdHandler,
  createUserHandler,
  notFoundHandler,
};

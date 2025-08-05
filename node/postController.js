const posts = [
  { id: 1, title: 'Post One', content: 'This is the first post.' },
  { id: 2, title: 'Post Two', content: 'This is the second post.' },
  { id: 3, title: 'Post Three', content: 'This is the third post.' },
];
// ES6 module export syntax. Use either of the below approaches for ES6 modules.
// export const getPosts = () => posts; // Named export

// ES6 module export syntax
// Default export
// export default getPosts;

const getPosts = () => posts;
export const getTotalPosts = () => posts.length;
export default getPosts;

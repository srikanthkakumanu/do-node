// Async / Await example
// Array of posts
const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
  { title: 'Post Three', body: 'This is post three' },
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `${post.title}\n`;
    });
    console.log(output);
  }, 2000);
}

function createPost(post, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) resolve();
      else reject('Error: Something went wrong while creating the post');
    }, 2000);
  });
}

async function init() {
  try {
    await createPost({ title: 'Post Four', body: 'This is post four' });
    await createPost({ title: 'Post Five', body: 'This is post five' });
    getPosts();
  } catch (err) {
    console.error(err);
  }
}

// Usage
init();
// This will create new posts and then display all posts after 2 seconds
// Note: The posts will be displayed after the new posts are created

// Async / Await / fetch
async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(users);
  } catch (err) {
    console.error('Error fetching users:', err);
  }
}

// Fetch users
fetchUsers();
// This will fetch and display users from the API after the posts are created

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
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

// Usage
createPost({ title: 'Post Four', body: 'This is post four' }, getPosts);
// This will create a new post and then display all posts after 2 seconds
// Note: The posts will be displayed after the new post is created
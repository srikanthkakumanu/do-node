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

// createPost({ title: 'Post Four', body: 'This is post four' })
//   .then(getPosts)
//   .catch((err) => console.error(err));

// Promise-all examples
Promise.all([
  createPost({ title: 'Post Four', body: 'This is post four' }),
  createPost({ title: 'Post Five', body: 'This is post five' }),
])
  .then(() => {
    getPosts();
  })
  .catch((err) => console.error(err));




const fetch = require('node-fetch');

const fetchGithubUser = async (username) => {
  const url = `https://api.github.com/users/${username}`;
  const response = await fetch(url);
  const body = await response.json();

  if(response.status !== 200) {
    throw Error(body.message);
  }

  return body;
};

fetchGithubUser('xxx')
  .then(user => {
    console.log(user.name);
    console.log(user.location);
  })
  .catch(err => {
    console.error(`Error : ${err.message}`);
  });

const showGithubUser = async (username) => {
  // Or we can use try... catch...
  try {
    const user = await fetchGithubUser(username);
    console.log(user.name);
    console.log(user.location);
  } catch(err) {
    console.error(`Error : ${err.message}`);
  }
};

// showGithubUser('xxx121212');

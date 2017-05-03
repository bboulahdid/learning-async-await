const fetch = require('node-fetch');

const showGithubUserInfos = (username) => {
  const url = `https://api.github.com/users/${username}`;
  fetch(url)
    .then(response => response.json())
    .then(user => {
      console.log(user.name);
      console.log(user.location);
    })
};

async function showGithubUserInfosAsync(username) {
  const url = `https://api.github.com/users/${username}`;
  const response = await fetch(url);
  const user = await response.json();

  console.log(user.name);
  console.log(user.location);
};

showGithubUserInfosAsync('bboulahdid');

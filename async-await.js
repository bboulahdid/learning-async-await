const fetch = require('node-fetch');

// Function declaration
async function showGithubUserInfosAsync_1(username) {
  const url = `https://api.github.com/users/${username}`;
  const response = await fetch(url);
  return await response.json();
};

// Function expression
const showGithubUserInfosAsync_2 = async (username) => {
  const url = `https://api.github.com/users/${username}`;
  const response = await fetch(url);
  return await response.json();
};


class GithubApiClient {

  // Class function
  async fetchUser(username) {
    const url = `https://api.github.com/users/${username}`;
    const response = await fetch(url);
    return await response.json();
  }

}

// IIFE
(async () => {
  const client = new GithubApiClient();
  const user = await client.fetchUser('bboulahdid');
  console.log(user.name);
  console.log(user.location);
})();
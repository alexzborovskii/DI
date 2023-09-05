const axios = require("axios");

async function fetchPosts () {
  let res = await axios.get("https://jsonplaceholder.typicode.com/posts");

  let data = res.data;
  return data;
}

module.exports = {fetchPosts};
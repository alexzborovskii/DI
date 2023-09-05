const express = require('express');
const {fetchPosts } = require('./data/dataService.js')
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/* Define a basic data array containing a few book objects. 
Each book object should have properties like 
id, title, author, and publishedYear. */

app.listen(process.env.PORT, () => {
  console.log(`run on port ${process.env.PORT}`);
});

app.get('/api/posts/', async (req, res) => {
    try {
        const data = await fetchPosts();
        console.log("Data was successfully retieved from fakeapi")
        res.json(data);
      } catch (err) {
        console.log(err);
      }
})


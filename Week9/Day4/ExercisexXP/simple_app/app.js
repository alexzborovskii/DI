const {i_router} = require('./routes/index.js');
const express = require('express')

const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.listen(process.env.PORT, () => {
    console.log(`run on port ${process.env.PORT}`);
  });
  //PORT = 3000

app.use(i_router)
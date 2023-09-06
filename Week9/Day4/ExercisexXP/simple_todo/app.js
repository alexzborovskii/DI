const {t_router} = require('./routes/todos.js');
const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/todos/', t_router);

app.listen(process.env.PORT, () => {
    console.log(`run on port ${process.env.PORT}`);
});
//PORT = 3000


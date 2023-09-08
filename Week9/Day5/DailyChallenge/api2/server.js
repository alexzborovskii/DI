const {u_router} = require('./routes/users.router.js');
const express = require("express");
const cors = require("cors")

const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use('/', u_router);

app.listen(process.env.PORT, () => {
    console.log(`run on port ${process.env.PORT}`);
});
//PORT = 3000

/* 
for test :
{
    "username": "u1",
    "password": "12342110"
}

*/
const express = require("express");
const dotenv = require("dotenv");
const {p_router} = require('./routes/products.router.js');
const {u_router} = require('./routes/users.router.js');
const cors = require("cors");
const {auth } = require('./middlewares/utils.js')
dotenv.config();

const app = express();
app.use(cors());

app.use('/api/users', auth)
app.use("/api")



app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(process.env.PORT, () => {
  console.log(`run on port ${process.env.PORT}`);
});
// const PORT = 3005;

app.use('/api/products/', p_router);
app.use('/api/users', u_router);

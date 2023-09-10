const express = require("express");
const dotenv = require("dotenv");
const {p_router} = require('./routes/products.router.js');
const {u_router} = require('./routes/users.router.js');
const cors = require("cors");
const {auth } = require('./middlewares/utils.js')
dotenv.config();

const app = express();
// request => middleware => response
app.use(cors());
// const logger = (req, res, next) => {
//   console.log('url => ', req.url);
//   console.log('method => ', req.method);
//   console.log('params => ', req.params);
//   console.log('query => ', req.query);
//   console.log('body => ', req.body);
//   next();
// }

// const auth = (req, res) => {
//   const user = req.query.user;
//   if (user == 'admin') {
//     next()
//   } else {
//     res.status(401).send("Unauthorize")
//   }
// }

// app.use(logger) (call in users.router.js)
app.use('/api/users', auth)




app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(process.env.PORT, () => {
  console.log(`run on port ${process.env.PORT}`);
});
// const PORT = 3005;

app.use('/api/products/', p_router);
app.use('/api/users', u_router);

const { users } = require("../config/db.js");

const getAllUsers = (req, res) => {
  res.json(users);
};

const getUser = (req, res) => {
    const id = req.params.id;
    const user = users.find((item) => item.id == id);
    if (!user) return res.sendStatus(404); //.json({ msg: "Product not found" });
    res.status(200).json(user);
  }

module.exports = {
  getAllUsers,getUser
};

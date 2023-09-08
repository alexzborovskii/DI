const { getData } = require("../controllers/users.controller.js");
const bcrypt = require('bcrypt');

// check if required fields are not empty and username doesnt exist
const regCheck = (req, res, next) => {
    const { username, password } = req.body;
    let users = getData();
    const userExists = users.findIndex((item) => item.username == username);
    if (password == "" || username == "" || userExists != -1) {
        res.json({
            msg: "Registration unsuccessfull. Username exists or required fields username and password are empty",
        });
    } else {
        const id = getID(users);
        req.body.id = id;
        next();
    }
};

// username exists check
function usernameExists(req, res, next) {
    const { username } = req.body;
    let users = getData();
    const userFind = users.findIndex((item) => item.username == username);
    if (userFind == -1) {
        res.json({
            msg: "User with such username doesn`t exists",
        });
    } else {
        next();
    }
}

//create ID = max existed ID + 1
function getID(users) {
    const idArr = users.map((item) => item.id);
    console.log("idArr: ", idArr);
    const id = Math.max(...idArr) + 1;
    console.log("id: ", id);
    return id;
}


module.exports = { regCheck, usernameExists };

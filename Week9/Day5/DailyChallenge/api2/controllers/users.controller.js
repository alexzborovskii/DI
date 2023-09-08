const fs = require("fs");
const bcrypt = require("bcrypt");

// +register, +login,  +getAllUsers, getUser, +editUser

//Register
const register = (req, res) => {
    try {
        const { fname, lname, email, username, password, id } = req.body;
        let users = getData();

        let hashedPass = "as";
        const saltRounds = 10;

        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(password, salt, function (err, hash) {
                console.log("hash: ", hash);
                // hashedPass = hash;
                const newUser = {
                    id: id,
                    fname: fname,
                    lname: lname,
                    email: email,
                    username: username,
                    password: hash,
                };
                users.push(newUser);
                writeData(users);
                res.json({ msg: `User ${username} created!` });
            });
        });
    } catch (error) {
        return console.log(error);
    }
};

//login
const login = (req, res) => {
    try {
        const { username, password } = req.body;
        let users = getData();
        if (users.find((item) => item.username == username) == -1) {
            return res.json({ msg: `Username ${username} doesn't exist` });
        }
        const realPassword = users.find(
            (item) => item.username == username
        ).password;
        bcrypt.compare(password, realPassword, function (err, result) {
            if (result) {
                return res.json({
                    msg: `${username} logged in successfully`,
                });
            } else {
                return res.json({ msg: `Wrong password for ${username}` });
            }
        });
    } catch (error) {
        return console.log(error);
    }
};

// get all users
const getAllUsers = (req, res) => {
    try {
        const users = getData();
        res.send(users);
    } catch (error) {
        return console.log(error);
    }
};

//get user by id
const getUser = (req, res) => {
    try {
        const id = req.params.id;
        const users = getData();
        const user = users.find((item) => item.id == id);
        if (!user) return res.send({ msg: "user not found" });
        res.json(user);
    } catch (err) {
        console.log(err);
    }
};

// edit user
const editUser = (req, res) => {
    try {
        const id = req.params.id;
        const { fname, lname, email, username, password } = req.body;
        let users = getData();
        let userIndex = users.findIndex((item) => item.id == id);
        users[userIndex] = {
            ...users[userIndex],

            fname: fname,
            lname: lname,
            email: email,
        };
        writeData(users);
        res.json(users);
    } catch (error) {
        return console.log(error);
    }
};

const getData = () => {
    try {
        const data = fs.readFileSync("./data/users.json", "utf8");
        return JSON.parse(data);
    } catch (error) {
        console.error(err);
        return [];
    }
};

const writeData = (data) => {
    try {
        const strData = JSON.stringify(data);
        fs.writeFileSync("./data/users.json", strData);
        console.log("file written successfully");
    } catch (err) {
        console.error(err);
    }
};

module.exports = {
    register,
    login,
    getAllUsers,
    getUser,
    editUser,
    getData,
};

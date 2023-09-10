const fs = require("fs");
const bcrypt = require("bcrypt");
const {
    _getAllUsers,
    _getUserById,
    _insertUser,
    _updateUser,
} = require("../models/users.model.js");
const { db } = require("../config/db.js");

//register
const register = (req, res) => {
    try {
        const { password, username, fname, lname, email } = req.body;
        const saltRounds = 10;

        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                const newUser = {
                    fname: fname,
                    lname: lname,
                    email: email,
                    username: username,
                    password: hash,
                };
                const data = await _insertUser(newUser);
                res.json({ data, msg: `User ${username} created!` });
            });
        });
    } catch (error) {
        console.error(error);
        res.status(404).json({ msg: error.message });
    }
};

//login
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (
            (await db("users").select("username", "id").where({ username }))
                .length == 0
        ) {
            return res.json({ msg: `Username ${username} doesn't exist` });
        }
        const realPassword = await db("users")
            .select("password")
            .where({ username });
        bcrypt.compare(
            password,
            realPassword[0].password,
            function (err, result) {
                if (result) {
                    return res.json({
                        msg: `${username} logged in successfully`,
                    });
                } else {
                    return res.json({ msg: `Wrong password for ${username}` });
                }
            }
        );
    } catch (error) {
        return console.log(error);
    }
};

// get all users
const getAllUsers = async (req, res) => {
    try {
        const data = await _getAllUsers();
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(404).json({ msg: "Couldnt find the users" });
    }
};

//get user by id
const getUser = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await _getUserById(id);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(404).json({ msg: "No user match this id" });
    }
};

// edit user
const editUser = async (req, res) => {
    const { id } = req.params;
    try {
        const { password, username, fname, lname, email } = req.body;
        const saltRounds = 10;

        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                const newUser = {
                    fname: fname,
                    lname: lname,
                    email: email,
                    username: username,
                    password: hash,
                };
                const data = await _updateUser(newUser, id);
                res.json(data);
            });
        });
    } catch (error) {
        console.error(error);
        res.status(404).json({ msg: error.message });
    }
};

module.exports = {
    register,
    login,
    getAllUsers,
    getUser,
    editUser,
};

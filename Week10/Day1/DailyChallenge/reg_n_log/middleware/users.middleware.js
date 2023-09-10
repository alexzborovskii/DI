const bcrypt = require("bcrypt");
const { db } = require("../config/db.js");

// check if required fields are not empty and username doesnt exist
const regCheck = async (req, res, next) => {
    const { username, password } = req.body;
    const existedUsers = await db("users")
        .select("username", "id")
        .where({ username });
    if (password == "" || username == "" || existedUsers.length > 0) {
        res.json({
            msg: "Registration unsuccessfull. Username exists or required fields username and password are empty",
        });
    } else {
        next();
    }
};

// // username exists check
// async function usernameExists(req, res, next) {
//     const { username } = req.body;
//     const existedUsers = await db("users").select("username", "id" ).where({ username });

//     if (existedUsers.length > 0) {
//         res.json({
//             msg: "User with such username exists",
//         });
//     } else {
//         next();
//     }
// }

module.exports = {
    regCheck,
    // usernameExists,
};

const { db } = require("../config/db.js");

const _getAllUsers = () => {
    return db("users").select("fname", "lname", "email", "username", "password", "id" ).orderBy("id");
};

const _getUserById = (id) => {
    return db("users").select("fname", "lname", "email", "username", "password", "id" ).where({ id });
};

const _insertUser = ({ fname, lname, email, username, password}) => {
    return db("users").insert({ fname, lname, email, username, password}, ["fname", "lname", "email", "username", "password", "id" ]);
};

const _updateUser = ({ fname, lname, email, username, password}, id) => {
    return db("users")
        .update({ fname, lname, email, username, password})
        .where({ id })
        .returning(["fname", "lname", "email", "username", "password", "id" ]);
};
 
// const _deleteUser = (id) => {
//     return db("users")
//         .where({ id })
//         .del()
//         .returning(["fname", "lname", "email", "username", "password", "id" ]);
// };

module.exports = {
    _getAllUsers,
    _getUserById,
    _insertUser,
    _updateUser,
    // _deleteUser,
};

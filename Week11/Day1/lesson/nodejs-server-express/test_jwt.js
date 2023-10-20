const jwt = require("jsonwebtoken");

//Create a JWT - jwt.sign (payload, secret-code, expire-time)

// const token = jwt.sign(
//     {
//         email: "aaa@gmail.com",
//         username: "aaa",
//         userid: 123456,
//     },
//     "1234#456@",
//     { expiresIn: '1d'}
// );

// console.log("token: ", token);

const oldToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFhYUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImFhYSIsInVzZXJpZCI6MTIzNDU2LCJpYXQiOjE2OTUxOTM2NTMsImV4cCI6MTY5NTI4MDA1M30.ZAHIaTZIK1Dg31rin6di1yLl6nGjaUPz_xA1M5zjL48";


// Verify - jwt.verify(token, secret, (error, decode)=> {})

jwt.verify(oldToken, '1234#456@', (err, decode) => {
    if(err) return console.log("error: ", err)
    console.log("decode: ", decode)
})
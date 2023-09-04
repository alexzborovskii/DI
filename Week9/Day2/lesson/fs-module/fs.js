const fs = require('fs');

// // try
const data = fs.readFileSync('users.json', "utf-8");
console.log(data);
// // catch(e)

// console.log("before")
// fs.readFile('users.json', "utf-8", (err, data) => {
//     if(err) return console.log(err);
//     console.log(data)
// });
// console.log("after")
let arr = [{username: "aaa", password: 123456}];



fs.writeFile('info', JSON.stringify(arr), (err) => {
    if (err) return console.log(err);
})
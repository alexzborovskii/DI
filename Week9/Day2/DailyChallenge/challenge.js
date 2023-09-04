const {greet} = require('./greeting.js');
const {callMsg} = require('./colorful-message.js');
const {readFromFile} = require('./read-file.js');

console.log(greet('Phill'));
callMsg();
readFromFile("./files/file-data.txt")
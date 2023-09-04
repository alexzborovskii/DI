const {arr} = require('./products.js');

function search(name) {
    const found = arr.find((product) => product.name == name)
    return found    
}

console.log(search("apple"));
console.log(search("orange"));
console.log(search("carrot"));
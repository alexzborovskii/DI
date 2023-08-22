// /* Pass by vakue, pass by reference*/

// let a = 10;
// let b = a;


// console.log(a, b);



// /* Objects */

// let a = 'city'
// let obj = {
//     name: 'John',
//     age: 25,
//     lastname: 'Due',
//     getFullName: function(){
//         return this.name + this.lastname
//     },
//     [a]:'Ramat Gan',
// }

// // let obj1 = new Object();

// console.log('obj=>', obj);


// let name = obj.name;
// let lname = obj["lastname"];
// console.log("name=>", name, "lastnamne=>", lname);

// let f = obj.getFullName();
// console.log(f)

// obj.address = 'Bezalel 4';

// console.log('obj=>', obj);

// let firstname = 'John';
// let email = 'jjj@ksdjfg.dsfg'
// obj = {
//     firstname,
//     email,
// }

// console.log(obj);

// for(let x in obj) {
//     console.log(`${x} ${obj[x]}`)
// }


// Object.keys(obj);
// Object.values(obj);
// console.log(Object.entries(obj))


let arr = ["blue", ["red", ["a","b"], "yellow"], "green"];
let flattened = arr.flat(1);
console.log(flattened)// →  ["blue", "red", "a", "b", "yellow", "green"]
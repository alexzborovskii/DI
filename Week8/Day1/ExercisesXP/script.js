// /* Exercise 1 */
// // it destracts all the nested values of the object

// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);


// /* Exercise 2 */
// //output : 'Your full name is Elie Schoppik'

// function displayStudentInfo(objUser){
//     const {first, last} = objUser
//     console.log(`Your full name is ${first} ${last}`)
// }

// displayStudentInfo({first: 'Elie', last:'Schoppik'});


// /* Exercise 3 */
// const users = { user1: 18273, user2: 92833, user3: 90315 };
// //1
// // Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// let usersArr = Object.entries(users)
// console.log(usersArr)
// //2
// // Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
// for (let i = 0; i < usersArr.length; i++) {
//     usersArr[i][1] *= 2
// }
// console.log(usersArr)

// /* Exercise 4 */
// // type = object, because it inherits from object
// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }

//   const member = new Person('John');
//   console.log(typeof member);

// /* Exercise 5 */
// //2


/* Exercise 6 */
//1
// [2] === [2]  // false 
// {} === {} // false
// its not the same objects, thats why they have different references
//2
// objects 1, 2, 3, reference to the same object. object 4 - separeted one. thats why 2, 3 have "4" and 4 has "5" 

// const object1 = { number: 5 };
// const object2 = object1;
// const object3 = object2;
// const object4 = { number: 5 };

// object1.number = 4;
// console.log(object2.number)
// console.log(object3.number)
// console.log(object4.number)

// /* Exercise 7 */
// //1
// class Animal {
//     constructor(name, type, color) {
//         this.name = name;
//         this.type = type;
//         this.color = color;
//     }
// }
// const newCat = new Animal("Lilo", "cat", "red");
// //2
// class Mamal extends Animal {
//     // constructor(name, type, color){
//     //     super(name, type, color);
//     // }

//     sound(noise) {
//         console.log(`Name  ${this.name} type ${this.type} color ${this.color} says ${noise}`)        
//     }
// }
// //3
// const newMamal = new Mamal("Scooby", "dog", "brown");
// newMamal.sound("weeee");

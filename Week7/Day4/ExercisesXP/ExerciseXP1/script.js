// /* Exercise 1 */
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// //1
// colors.forEach((element, index) => {
//     console.log(`#${index + 1} choice is ${element}`);
// });
// //2
// console.log(colors.some((element) =>  element==='Violett'));


// /* Exercise 2 */
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th", "st", "nd", "rd"];

// const func = (arr1, arr2) => {
//     arr1.forEach((element, index) => (index < ordinal.length) ?
//         console.log(`#${index + 1}${arr2[index]} choice is ${element}`)
//         : console.log(`#${index + 1}${arr2[0]} choice is ${element}`));
// };
// func(colors, ordinal)


/* Exercise 3 */
// // ------1------  //['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange'] - array with "...arr" replaced by arr values
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];
// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

// // ------2------ // ['U', 'S', 'A'] -  array of the country letters
// const country = "USA";
// console.log([...country]);

// // ------Bonus------
// let newArray = [...[,,]]; // [undefined, undefined] - "..." unwraps the array, inside of with two "," mean that there are two elements without values. thats why 2 'undefined'
// console.log(newArray);

// /* Exercise 4 */
// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// //1
// const welcomeStudents = users.map((element) => `Hello ${element.firstName}`);
// console.log(welcomeStudents);
// //2
// const filtred = users.filter((element) => element.role === 'Full Stack Resident');
// console.log(filtred);
// //3
// const filtredMapped = (users.filter((element) => element.role === 'Full Stack Resident')).map((element) => element.lastName);
// console.log(filtredMapped);


// /* Exercise 5 */
// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// //1
// resString = epic.reduce((acc, value) => acc + " " + value);
// console.log(resString);


// /* Exercise 5 */
// const students = [{ name: "Ray", course: "Computer Science", isPassed: true },
// { name: "Liam", course: "Computer Science", isPassed: false },
// { name: "Jenner", course: "Information Technology", isPassed: true },
// { name: "Marco", course: "Robotics", isPassed: true },
// { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
// { name: "Jamie", course: "Big Data", isPassed: false }];

// //1
// const passeStudents = students.filter((element) => element.isPassed == true);
// console.log(passeStudents);
// //2
// students.filter((element) =>
//     element.isPassed == true).forEach((element) =>
//         console.log(`Good job ${element.name}, you passed the course in ${element.course}`));

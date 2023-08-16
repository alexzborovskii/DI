// const people = ["Greg", "Mary", "Devon", "James"];
// // // Exercise 1
// // PART 1
// //1
// console.log(people);
// people.shift();
// console.log(people);
// //2
// people.splice(2, 1, 'Jason');
// console.log(people);
// //3
// people.push("Alex");
// console.log(people);
// //4
// console.log(people.indexOf("Mary"));
// //5
// console.log(people.slice(1, -1));
// //6
// console.log(people.indexOf("Foo"));
// //7
// let last = people[people.length-1];
// console.log(last)


// // // PART 2
// //1
// for (let person of people){
//     console.log(person)
// }
// //2
// for (let person of people){
//     if (person == 'Devon'){
//         break;
//     }
//     console.log(person);
// }

// // // Exercise 2
// //1 
// let colors = ["red", "blue", "yellow", "pink"];
// //2
// counter = 1;
// for (let color of colors){
//     console.log("My #" + counter + " choice is " + color);
//     counter++
// }

// // // Exercise 3
// //1 
// user_number = prompt("Type a number: ");
// console.log(typeof(user_number));
// user_number = Number(user_number)
// //2
// do{
//     user_number = prompt("Type a number: ");
// }while (user_number < 10)

// // // // Exercise 4
// //1
// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }
// //2
// console.log(building['numberOfFloors']);
// //3
// console.log(building['numberOfAptByFloor']['firstFloor'], building['numberOfAptByFloor']['thirdFloor']);
// //4
// console.log(building['nameOfTenants'][1], building['numberOfRoomsAndRent']["dan"][0])
// //5
// console.log(building['numberOfRoomsAndRent']["dan"][1])
// if ((building['numberOfRoomsAndRent']["sarah"][1] + building['numberOfRoomsAndRent']["david"][1]) > building['numberOfRoomsAndRent']["dan"][1]){
//     building['numberOfRoomsAndRent']["dan"][1] = 1200;
//     console.log(building['numberOfRoomsAndRent']["dan"][1])
// }


// // // // Exercise 5
// //1
// let family = {
//     name: "Garcia",
//     members: 7,
//     country: "Israel",
// }
// //2
// for (let person in family){
//     console.log(person)
// }
// //3
// for (let person in family){
//     console.log(family[person])
// }

// // // // Exercise 6
// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
//   }
// result_str = "";
// for (key in details){
//     result_str += key + " ";
//     result_str +=  details[key] + " ";
// }
// console.log(result_str);


// // // // Exercise 7
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// //1
// names_sort = names.sort();
// society_name = "";
// for (friend_name of names_sort){
//     society_name += friend_name[0];
// }
// //2
// console.log(society_name);

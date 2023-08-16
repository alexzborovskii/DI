// console.log('Hello, World');
// console.log('Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti perspiciatis sunt, temporibus maiores fugit laudantium assumenda voluptate facere esse tenetur!');

// let x = 3;
// console.log(x)

// let myName = 'Daniel is a teacher';

// let exampleString = 'Example';
// let exampleString2 = 'Example';
// console.log(exampleString + " " + exampleString2);
// let longString = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' + "Deleniti perspiciatis sunt \n , temporibus maiores fugit laudantium assumenda" + 'voluptate facere esse tenetur!';
// console.log(longString)
// console.log(longString.length)

// // Indexof
// console.log(myName.indexOf('a'))

// // Substring
// console.log(myName.substring(7, 10))

// //toLowerCasw
// let myString = "AbCdEfGhIjKlMnOp"
// console.log(myString.toLowerCase())
// console.log(myString.toUpperCase())
// console.log(myString)

// let addressNumber = 5;
// let addressStreet = 'BenYehuda';
// let country = 'Israel';

// globalAddress=  addressStreet + ', ' + addressNumber + ', in ' + country;
// console.log('I live in ' + globalAddress);



// let op = "me";
// let op2 = 2;
// console.log(isNaN(op));
// console.log(isNaN(op2));

// // toString
// let ten = 10;
// console.log(ten);
// console.log(ten.toString());

// let x = 2;
// console.log(1 === 1);
// console.log(x == "2");
// console.log(x === "2");
// console.log(x === 2);

// console.log(x != 2);

// console.log(x >= 2);
// console.log(x > 1 && x < 3);
// console.log(x > 5 || x < 3);

// console.log('before')
// alert("Welcome to my website")
// console.log('after')


// prompt
// let userAnswer = prompt('What is your name', 'Guest');
// console.log('Welcome to the class, ' + userAnswer)

//confirm
// let isBoss = confirm("Atr you the boss?")
// alert(isBoss)



/////////////// ARRAYS ///////////////
// let users = ['Daniel', 'Alex', 'Mikhael', 'Kachi'];
// let x= "1";
// console.log(typeof users);


// console.log(users[2])

// let colors = ["blue", "yellow", "green", 54]
// console.log(colors[3])
// [1,2,3,]
// let arrayCaption = [
//     [1,2,3,],
//     [5,6,7,8],
//     [11, 13, 15],
// ];

// console.log(arrayCaption[0][1]);
// console.log(arrayCaption[2][2]);


// let colors = ["Pink", "Blue", "Green"];
// console.log(colors);
// colors[1] = "Yellow";
// console.log(coclors);

// console.log(colors.length);


/////////ARRAY METHODS////////////

// let colors = ["Pink", "Blue", "Green"];
// console.log(colors);
// // //add
// colors.push("Yellow");
// colors.push("Purple");
// console.log(colors);
// //remove
// console.log(colors);
// colors.pop();
// console.log(colors);
// colors.push("Purple");


// splice - remove/add

// let colors = ["blue", "yellow", "green"];
// console.log(colors);
// colors.splice(1, 1, "purple", "orange")
// console.log(colors);

// slice

// let colors = ["blue", "yellow", "green", "pink"];
// let slicedArray = colors.slice(1,3);
// console.log(slicedArray)

// console.log(colors.toString())

// //EXERCISE #3
// let pets = ['cat','dog','fish','rabbit','cow'];
// console.log(pets[1])
// console.log(pets)
// pets.push('horse')
// console.log(pets)
// pets.splice(3, 1)
// console.log(pets)
// console.log(pets.length)


// let person = {
//     firstName: "Daniel",
//     lalstName: "Robin",
//     age: 26,
//     eyeColor: "blue",
//     };

// console.log(person.firstName);
// console.log(person.lalstName);
// console.log(person.age);


// // add/change value

// person.country = "Israel";
// console.log(person);
// console.log(person.age);
// console.log(person);

// delete person.age;
// console.log();



///////////CONDITIONALS//////////
// if statements - conditionals
// if ("Condition"){
// do this
// }


// let x = 22;

// if (x >= 21){
//     console.log("You can drink in the United States AND ANYWHERE ELSE");
// } else if (x === 18){
//     console.log("You can drink in most of the places");
// } else{
//     console.log("You are too young to drink in the United States")
// }


// let userAge = Number(prompt('Whats your age?'))
// if (userAge < 18) {
//     alert("Sorry, you are too young to drive this car. Powering off")
// } else if (userAge === 18) {
//     alert("Congratulations on your first year of driving. Enjoy the ride!")
// } else if (userAge > 18){
//     alert("Powering On. Enjoy the ride!")
// } else{
//     alert("Incorrect age.")
// }


// // switch case

// // let fruit = "Papayas";
// // let fruit = "Oranges";
// let fruit = "Apples";

// switch(fruit){
//     case 'Oranges':
//         console.log("Oranges are 0.6 per kilo");
//         break;
//     case 'Mangoes':
//     case 'Papayas':
//         console.log("Mangoes and papayas are 2.5 per kilo");
//         break;
//     default:
//         console.log("Sorry, we are out of " + fruit)
// }




// for (let i = 0; i < 10; i++) {
//     console.log("Current i is " + i)
// }

// let colors = ["red", "blue", "green", "purple", "pink"];

// for (let i = 0; i < colors.length; i++) {
//     console.log("the " + (i+1)+ " color is " + colors[i]);
// }


// for (variable in object){
//     statement
// }

// let person = {
//     name:"Daniel",
//     age:"26",
//     country: "Israel",
// }


// // ONLY way to loop through the object
// for(let key in person){
//     console.log(key + ": " + person[key]);
// }


// // // for array loop
// let colors = ["blue", "yellow", "red"];
// // let x = 0;
// for(let i of colors){
//     // console.log("color at position" + x + " is " + i);
//     // x++;
//     console.log(i);
// }


// // while loop
// let n = 0;
// while (n < 3){
//     console.log(n);
//     n++;
// }


// let answer = prompt("what is the secret password?")
// while (answer != "1234"){
//     answer = prompt("123what is the secret password?")
// }
// alert("Welcome Admin")

// // DO WHILE LOOP. runs at least once
// let i = 1;
// do{
//     console.log("The number is " + i)
//     i++;
// } while(i < 10);


// // break statement
// for (let i = 0; i<10; i++) {
//     if (i === 3){
//         break;
//     }
//     console.log(i)
// }



// for (let i = 0; i<10; i++){
//     if (i===3){
//         console.log("we are continuing")
//         continue;
//     }
//     console.log(i);
// 

// let myName = "Daniel"

// function sayHello(){
    
// }


// for (let i = 0; i<10; i++){
//     console.log(myName);
//     let favoriteFood = "Burgers";
//     for (let i = 0; i < 2; i++){
//         console.log(favoriteFood);
//     }
// }
// // error - console.log(favoriteFood)

// let myName = "Daniel";
// console.log(myName);

// myName = "Sam";

// console.log(myName)

const yourName = "Vladlena";
console.log(yourName);

// yourName = 'Alex';

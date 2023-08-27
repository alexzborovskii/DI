// const object1 = {
//     a: "something",
//     b:42,
//     c: false,
// }

// console.log(Object.keys(object1))
// console.log(Object.values(object1))
// const newArr = Object.entries(object1)
// console.log(newArr)

// const newerArr = [
//     ["name", "daniel"],

// ]

// let myObj = {
//     name : "John",
//     lastName : "Doe",
//     age : 25,
//     friends : ["Mark", "Lucie", "Ana"]
// }

// console.log(Object.keys.length)
// console.log(Object.values.length)
// console.log(Object.entries.length)
// pairs = Object.entries(myObj)
// for (let i=0; i< Object.entries(myObj).length; i++) {
//     console.log(`The ${i} key is: ${pairs[i][0]} The ${i} value is : ${pairs[i][1]}`)
// }

// const address = {
//     street: 'Evergreen Terrace',
//     number: '742',
//     city: 'Springfield',
//     state: 'NT',
//     zip: '49007',
//   };

// const { street: s, city: c} = address;

// console.log(s)
// console.log(c)

// const {street, city} = address;

// console.log(street);
// console.log(city);

// const student = {
//     name: 'John Doe',
//     age: 16,
//     scores: {
//         maths: 74,
//         english: 63
//     }
// };


// const {name, scores: {math, science = 56},} = student;
// console.log(`${name} scored ${math} and ${science} in science`)

//SPREAD OPERATOR
// let obj = {foo:1, boo:2};
// let newObj = {...obj, baz:3};
// console.log(newObj)

// let obj = {foo:1, boo:2, baz:3};
// let newObj = {...obj, foo:true};
// console.log(newObj)


// class Rectangle {
//     constructor(height, width){
//         this.height = height;
//         this.width = width;
//     }
//     calcArea() {
//         return this.height * this.width;
//     }
// }

// const square = new Rectangle(10, 10);
// console.log(square);

// console.log(square.calcArea())

// const biggerSquare = new Rectangle (20, 20);
// console.log(biggerSquare)
// console.log(biggerSquare.calcArea())


// class Rabbit {
//     constructor(type) {
//         this.type = type;
//     }
//     speak(line) {
//         console.log(`The ${this.type} rabbit says '${line}'`);
//     }
    
    
    
// }
// let killerRabbit = new Rabbit("killer");
// let blackRabbit = new Rabbit("black");

// killerRabbit.speak("kill everybody")
// blackRabbit.speak("i am black")

// class Rectangle {
//     constructor(height, width){
//         this.height = height;
//         this.width = width;
//     }
//     calcArea() {
//         return this.height * this.width;
//     }
//     get area(){
//         return this.height * this.width
//     }

//     set area(factor) {
//         this.width = this.height*factor
//     }
// }


// const square = new Rectangle(10, 10);
// console.log(square.area)
// square.area=2
// console.log(square.area)


class Animal { 
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  
  class Dog extends Animal {
    constructor(name,noise) {
      super(name); // call the super class constructor and pass in the name parameter
      // Add a new property
      this.noise = noise;
    }
  
    speak() {
      console.log(`${this.name} barks.It says ${this.noise}`);
    }
  }



  let newDog = new Dog ("Mitzie", "Wouaf");
  newDog.speak();


  class Golden extends Dog {
    constructor(name, noise, color) {
        super(name, noise);
        this.color = color
    }
    speak() {
        console.log(`${this.name} barks.It says ${this.noise}. Its color is ${this.color}`);
    }
  }


  const goldenDoggo= new Golden ("bob", "woof", "golden")
  goldenDoggo.speak()


// function greet(){
//     console.log("Welcome");
// }


// greet();
// greet();

// function age(myAge){
//     momsAge = 2 * myAge;
//     dadsAge = 1.2 * momsAge;
//     console.log(`momsAge: ${momsAge}, dadsAge: ${dadsAge}`);
// }

// age(32);

// function execptions() {
//     try{

//     } catch(e){

//     }
// }


// function execptions() {
//     try{
//         console.log(greeting)
//     } catch(e){
//         console.log(e)
//     } finally {
//         console.log("i run any way")
//     }
// }

// // Throw an error

// function calc (x, y) {
//     const sum = x + y
//     try{
//         if (sum > 10){
//             throw new Error ("Your number bigger than allowed")
//         } else {
//             console.log(sum)
//         }
//     } catch(e) {
//         console.log(e)
//     }
// }
// calc(11,2)

// OBJECTS

const person = {
    fname : "Daniel",
    lname: "Robin",
    eat: function (){
        console.log(`I love chocolate and my name is ${this.fname}`)
    },
}

// console.log(person.lname)
person.eat();

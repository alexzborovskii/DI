// /* Exercise 1*/

// // #1
// // will be printed alert with a = 3, because its reasigned in if-block
// function funcOne() {
//     const a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne()
// // #1.2 What will happen if the variable is declared 
// // with const instead of let ?
// // TypeError, because we cant reassign const

// //#2 
// // 2 alerts with a = 0 and a = 5
// const a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree();
// funcTwo();
// funcThree();
// // #2.2 What will happen if the variable is declared 
// // with const instead of let ?
// // 1 alert with a = 0, then TypeError, because we cant reassign const


// //#3
// // alert with a = "hello".
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()
// funcFive()


// //#4
// // alert with a = "test"
// const a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix()
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?
// // alert with a = "test", because a is in function scope


// //#5
// // inside alert with inside a value = 5, then outside alert with global a value = 2
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// // #5.1 - run the code in the console
// // #5.2 What will happen if the variable is declared 
// // with const instead of let ?

// /* Exercise 2*/

// // function winBattle(){
// //     return true;
// // }
// //1
// const winBattle = () =>  true;
// //2
// let experiencePoints;
// //3
// experiencePoints = (winBattle())? 10 : 1;
// //
// console.log(experiencePoints)


// /* Exercise 3*/

// const isString = (value) => typeof(value) ==='string';

// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// //false


// /* Exercise 4*/

// const sumFunc = (num1, num2) => num1 + num2;
// console.log(sumFunc(3,5));

// /* Exercise 5*/
// //1
// function kgToGr(weightInKg) {
//     return weightInKg * 1000
// }
// console.log(kgToGr(4))
// //2
// const kgToGr = function (weightInKg) {
//     return weightInKg * 1000
// }
// console.log(kgToGr(4))
// //3
// //in declaration we just declare the body of the function with name, in wxpression we asign a variable to the body of function
// // 4
// const kgToGr = (weightInKg) => weightInKg * 1000;
// console.log(kgToGr(4))


// // /* Exercise 6*/
// ((childrenNumber, partnersName, location, job) =>{
//     const p = document.createElement("p");
//     const body = document.querySelector("body");
//     p.innerText = ` You will be a ${job} in ${location}, and married to ${partnersName} with ${childrenNumber} kids.`
//     body.append(p)
// })(10, "Alex", "Israel", "manager")


// /* Exercise 7*/
// let user = {
//     userName: "New user",
//     userPic: "https://www.rover.com/blog/wp-content/uploads/dog-ear-positions-perked-interested-e1682983624210.jpg",
// };

// ((userParam) => {
//     const nav = document.getElementsByTagName("nav")[0];
//     const div = document.createElement("div");
//     div.innerText = user.userName;
//     const userPic = document.createElement("img");
//     userPic.src = user.userPic;
//     nav.append(div);
//     nav.append(userPic);
// })(user)


// /* Exercise 8*/
// // // // Part I
// function makeJuice(size){
//     function addIngredients(firstIngridient, secondIngridient, thirdIngridient) {
//         return `The client wants a ${size} juice, containing ${firstIngridient}, ${secondIngridient}, ${thirdIngridient}.`
//     }
//     return addIngredients("medium")
// }

// console.log(makeJuice("first", "second", "third"));

// // // Part II
function makeJuice(size){
    let ingredients = [];

    function addIngredients(firstIngridient, secondIngridient, thirdIngridient) {
        console.log(ingredients);
        ingredients.push(firstIngridient);
        console.log(ingredients);
        ingredients.push(secondIngridient);
        console.log(ingredients);
        ingredients.push(thirdIngridient);
        console.log(ingredients);
    }
    function displayJuice(ingredients) {
        const p = document.createElement("p");
        const body = document.querySelector("body");
        let afterFirstIngr = '';
        for (ingr of ingredients.slice(1, ingredients.length)) {
            afterFirstIngr += `, ${ingr}`;
        }
        p.innerText =  `The client wants a ${size} juice, containing ${ingredients[0]}${afterFirstIngr}`;
        body.append(p)
       
    }
    return  addIngredients("first", "second", "third"), addIngredients("fourth", "fifth", "sixth"), displayJuice(ingredients);
}

console.log(makeJuice("medium"));

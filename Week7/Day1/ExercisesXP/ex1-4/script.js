// // // Exercise 1

// function displayNumbersDivisible(divisor) {
//     let numsArr = [];
//     let numsSum = 0;
//     for(let i = 0; i < 501; i++){
//         if (i % divisor == 0){
//             numsArr += i + " ";
//             numsSum += i;
//         }
//     }
//     console.log(`Outcome : ${numsArr}`);
//     console.log(`Sum : ${numsSum}`);

// }

// displayNumbersDivisible(23);

// // // Exercise 2

// const stock = {
//     "banana": 6,
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry": 1
// };

// const prices = {
//     "banana": 4,
//     "apple": 2,
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry": 10
// };

// let shoppingList = ["banana", "orange", "apple"];

// function myBill() {
//     console.log(stock)
//     totalPrice = 0;
//     for (let item of shoppingList) {
//         if (stock[item] > 0) {
//             totalPrice += prices[item];
//             stock[item]--;
//         }
//     }
//     console.log(stock)
//     return totalPrice
// }

// console.log(myBill());


// // // Exercise 3

// function changeEnough(itemPrice, amountOfChange) {
//     money_available = amountOfChange[0] * 0.25 +
//         amountOfChange[1] * 0.1 +
//         amountOfChange[2] * 0.05 +
//         amountOfChange[3] * 0.01;
//     return itemPrice < money_available;
// }

// console.log(changeEnough(4.25, [25, 20, 5, 0]));
// console.log(changeEnough(14.11, [2, 100, 0, 0]));
// console.log(changeEnough(0.75, [0, 0, 20, 5]));

// // // Exercise 4
// // 1
// function hotelCost() {
//     let nights = undefined;
//     do {
//         nights = prompt("Nights you would like to stay in the hotel");
//     } while (isNaN(nights))
//     return 140 * nights
// }


// // 2
// function planeRideCost() {
//     let nights = undefined;
//     do {
//         destination = prompt("Whats your destination?");
//         console.log(typeof (destination) != "string" || destination.length < 0);
//     } while (typeof (destination) != "string" || destination.length < 0);
//     switch (destination) {
//         case "London":
//             return 183;
//         case "Paris":
//             return 220;
//         default:
//             return 300;
//     }
// }


// // 3
// function rentalCarCost() {
//     let days = undefined;
//     do {
//         days = prompt("Whats the number of days you would like to rent a car?");
//         console.log(days)
//     } while (isNaN(days))
//     cost = days * 140;
//     if (days > 10) {
//         cost *= 0.95;
//     }
//     return cost;
// }


// // 4

// function totalVacationCost() {
//     let rCost = rentalCarCost();
//     let hCost = hotelCost();
//     let pCost = planeRideCost();
//     return `The car cost: ${rCost}, the hotel cost: ${hCost}, the plane tickets cost: ${pCost}.\n All together: ${rCost + hCost + pCost}`
// }

// console.log(totalVacationCost());

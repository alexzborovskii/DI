let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
} 
// //1
// const displayGroceries = (groceries) => {
//     groceries.fruits.forEach((element) => console.log(element));     
// }
// displayGroceries(groceries);


// //2
// const cloneGroceries = () => {
//     let user = client;
//     client = "Betty"; // it will change only client, because string is a primitive type, so "=" passes the value, not the reference to the same object 
//     // console.log(client);
//     // console.log(user);
//     let shopping = groceries;
//     groceries.totalPrice = "30$"; // object is not a primitive type, so "=" passes the reference to the variable at the assign moment. two references to the same object - if we change object from one reference, it is changed for other reference too
// //     console.log(groceries.totalPrice);
// //     console.log(shopping.totalPrice);
//     groceries.other.paid = false;// object is not a primitive type, so "=" passes the reference to the variable at the assign moment. two references to the same object - if we change object from one reference, it is changed for other reference too
//     // console.log(groceries.other.paid);
//     // console.log(shopping.other.paid);
// }
// //3
// cloneGroceries()

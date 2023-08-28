// /* Exercise 1 */
// function compareToTen(num) {
//     const myPromise = new Promise((resolve, reject) => {
//         setTimeout(() => { // for the output in the order of the tests. but why it helps?.. weird

//             if (num <= 10) {
//                 resolve(num)
//             } else {
//                 reject("too big number")
//             }
//         }, 0)
//     })
//     return myPromise
// }

// //In the example, the promise should reject
// compareToTen(15)
// .then(result => console.log(result))
// .catch(error => console.log(error))

// //In the example, the promise should resolve
// compareToTen(8)
//     .then(result => console.log(result))
//     .catch(error => console.log(error))

// /* Exercise 2 */
// const secondPromise = new Promise ((resolve) => {
//     setTimeout(()=> {
//         resolve("success");
//     }, 4000)
// })
// secondPromise
// .then((string) => console.log(string));

// /* Exercise 3 */
// //1
// Promise.resolve(3).then((value) => console.log(value));
// //2
// Promise.reject("Boo").catch((value) => console.log(value));
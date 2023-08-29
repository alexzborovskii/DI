/* Exercise 1 */

// // // https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My


// // // FIRST WAY


// // const btn = document.querySelector("#btn");
// // btn.addEventListener("click", getData)

// // function getData () {
// //     fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
// //     .then((response) => {
// //         if (!response.ok) {
// //             throw new Error("problem with fetch")
// //         } else {
// //             return response.json()
// //         }
// //     })
// //     .then((data) => { console.log(data.data) })
// //     .catch((error) => console.log("IN THE CATCH", error))
// // }

// // // SECOND WAY (main)
// async function getData() {
//     try {
//         const response = await fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
//         if (!response.ok) {
//             throw new Error("problem with fetch")
//         } else {
//             let data = await response.json();
//             let resData = data.data;
//             console.log(resData)
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }
// getData()


// /* Exercise 2 */
// async function getData() {
//     try {
//         const response = await fetch("https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
//         if (!response.ok) {
//             throw new Error("problem with fetch")
//         } else {
//             let data = await response.json();
//             let resData = data.data;
//             console.log(resData)
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }
// getData()

// /* Exercise 3 */

// // fetch("https://www.swapi.tech/api/starships/9/")
// //     .then(response => response.json())
// //     .then(objectStarWars => console.log(objectStarWars.result));

// async function getResult() {
//     try {
//         const response = await fetch("https://www.swapi.tech/api/starships/9/");
//         if (!response.ok) {
//             throw new Error("problem with fetching")
//         } else {
//             let data = await response.json();
//             console.log(data.result)
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }
// getResult()


// /* Exercise 4 */ 
// //result:
// // 1. console.log of the asyncCall;
// // 2. result of the resolveAfter2Seconds, because of the await in front of it
// // 3. console log result of resolveAfter2Seconds, that is success of the promise = "resolved"

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall();

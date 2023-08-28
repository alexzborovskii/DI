/* DC1 */

function makeAllCaps(arr) {
    const makeCapsPromise = new Promise((resolve, reject) => {
        const compRes = arr.every((element) => typeof (element) === "string");
        // console.log(compRes)
        if (compRes) {
            const upperArr = arr.map((element) => element.toUpperCase());
            // console.log(upperArr)
            resolve(upperArr)
        } else {
            reject("There is not a string element")
        }
    })
    return makeCapsPromise
}
        
function sortWords(arr) {
    const newPromise = new Promise ((resolve, reject) => {
        if (arr.length > 4) {
            // console.log(arr.sort());
            resolve(arr.sort())
        } else {
            reject("Arr length is less then 5")
        }
    }) 
    return newPromise
}


/* TESTS */

//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))
function exercise (param) {
    const myPromise = new Promise ((resolve, reject) => {
        setTimeout( () => {
            if (typeof(param) === "string"){
                resolve(param.toUpperCase())
            } else {
                reject("Not a string")
            }
    }, 5000)
    })
    return  myPromise
}

exercise("asd")
.then((string) => string+string)
.then((string) => console.log(string))
.catch((error) => console.log(error))
.finally(() => console.log("Congratulations"))

exercise(123)
.then((string) => string+string)
.then((string) => console.log(string))
.catch((error) => console.log(error))
.finally(() => console.log("Congratulations"))
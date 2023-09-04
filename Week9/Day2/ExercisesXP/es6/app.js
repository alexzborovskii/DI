import { persons } from "./data.js";

function avAge(arr) {
    const ageSum = arr.reduce((acc, curr) => acc + curr["age"], 0);
    const average = ageSum / arr.length + 1 
    console.log(average);
}

avAge(persons)
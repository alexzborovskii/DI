const lodash = require('lodash');
const {addition, multiplication} = require('./math.js');

let vals = [-2, 0, 3, 7, -5, 1, 2];

let sum1 = lodash.sum(vals);
console.log("sum1: ", sum1);

let sum2 = vals.reduce((acc, val) => addition(acc, val));
console.log("sum2: ", sum2);
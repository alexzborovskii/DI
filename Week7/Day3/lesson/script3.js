// function x(param){
//     function y(param1){
//         return param + param1
//     }
//     return y;
// } 

// let sum = x(3)(6);
// console.log('sum=', sum)


// function x(){
//     let hi = 'Hello';
//     function y() {
//         console.log(hi);
//     }
//     return y;
// }


// let sayhi = x()();
// console.log(sayhi);


/* compose */ 

const x = (a, b) => (c) => a(b(c));
const sum2 = (num) => num * 2;
const sum = (num) => num + 1;

let ret = x(sum2, sum)(6);

console.log('ret=>' + ret);

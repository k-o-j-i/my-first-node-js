'use strict'
const number = process.argv[2] || 0;
console.log("引数は" + number);
let sum = 0;
for(let i = 1; i <= number; i++){
    sum = sum + i;
}
console.log(sum);
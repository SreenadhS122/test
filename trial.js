const prompt = require('prompt-sync')();
const a = prompt("Enter a number.");
let sum = 0;
for(let i=1;i<a;i++){
  console.log(i);
  sum += i;
}
console.log("Sum - ",sum);
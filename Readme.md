Get-Content input.txt | node script.js

ODD or EVEN
let sum=0;
let num = userInput[0].split(" ").map(Number);;
for(let i=0;i<num.length;i++){ sum+=num[i] }
console.log(sum%2===0?"even":"odd");
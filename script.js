// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
   let sum=0;
let num = userInput[0].split(" ").map(Number);;
  console.log(num.length)

  for(let i=0;i<num.length;i++){
sum+=num[i]
  }
  console.log(sum%2===0?"even":"odd");
});
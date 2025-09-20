// Getting input via STDIN
const { flushCompileCache } = require("module");
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
let num=userInput[0]

num===0||num===1?false:num===2?true:num%2===0?false:num%3===0?false:true

return false
});
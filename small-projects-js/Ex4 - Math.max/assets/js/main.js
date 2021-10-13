// function maiorNum(num1, num2){
//     return Math.max(num1, num2);
// }
// ##############################
// const max = (num1, num2) => num1 > num2 ? num1 : num2;
// ##############################
const max = (num1, num2) => Math.max(num1, num2);
let n1 = (Math.random() * 1000).toFixed(0); 
let n2 = (Math.random() * 1000).toFixed(0); 
console.log(`${n1} / ${n2} ====> ${max(n1, n2)}`)
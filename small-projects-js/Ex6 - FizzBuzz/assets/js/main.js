let number = Number((Math.random() * 100).toFixed(0));
const func = (num) => {
    if (typeof num != "number") return num;
    if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
    if (num % 3 === 0) return "Fizz";
    if (num % 5 === 0) return "Buzz";
    return num;
}
console.log(number, func(number));
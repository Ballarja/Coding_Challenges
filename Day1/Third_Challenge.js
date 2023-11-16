/**
 * @param {number} n
 * @return {string[]}
 * Corrections have been made to were Fizz, Buzz, FizzBuzz, and numbers are storing in the array and printing to the console
 */

//let input = require("readline-sync");
function fizzBuzzChallenge(n) {

    let fizzBuzzArray = [];
    const fizz = "Fizz";
    const buzz = "Buzz";
    const fizzBuzz = "FizzBuzz";

    for(let i = 1; i <= n; i++){
        if (i % 3 === 0 && i % 5 === 0){
            fizzBuzzArray.push(fizzBuzz);
        }
        else if (i % 3 === 0){
            fizzBuzzArray.push(fizz);
        }
        else if (i % 5 === 0){
            fizzBuzzArray.push(buzz);
        } else {
            fizzBuzzArray.push(i);
        }
    }
    console.log(fizzBuzzArray);
    return fizzBuzzArray;
}
console.log(fizzBuzzChallenge(87))
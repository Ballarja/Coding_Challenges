/**
 * @param {number} n
 * @return {string[]}
 * There will have to be some improvements made to this currently the challenge isn't functioning as intended
 */

//let input = require("readline-sync");
var fizzBuzz = function(n) {

    let fizzBuzzArray = [];
    const fizz = "Fizz";
    const buzz = "Buzz";
    const fizzBuzz = "FizzBuzz"

    if(n % 3 === 0 && n % 5 === 0){
        for(let i = 0; i < fizzBuzzArray.length; i++){
            fizzBuzzArray.push(fizzBuzz);
            fizzBuzzArray.toString();
        }
    }
    else if(n % 3 === 0){
        for(let i = 0; i < fizzBuzzArray.length; i++){
            fizzBuzzArray.push(fizz);
            fizzBuzzArray.toString();
        }
    }
    else if(n % 5 === 0){
        for(let i = 0; i < fizzBuzzArray.length; i++){
            fizzBuzzArray.push(buzz);
            fizzBuzzArray.toString();
        }
    }
    else if(n % 3 !== n % 5){
        for(let i = 0; i < fizzBuzzArray.length; i++){
            fizzBuzzArray.push(n);
            fizzBuzzArray.toString();
        }
    }
    console.log(fizzBuzzArray);
    return fizzBuzzArray;
};
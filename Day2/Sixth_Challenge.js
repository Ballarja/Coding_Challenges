/**
 * Even or Odd Challenge
 */
function evenOrOdd(number) {
    let odd = "Odd";
    let even = "Even";

    if(number % 2 === 0){
        return even
    }
    else if(!number % 2 === 0){
        return odd;
    }
}
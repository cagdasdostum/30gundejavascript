//Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(number) {
    let sum = 0;
    if(number > 0) {
        for(let i = number; i >= 0; i--) {
            sum += i;
        }
    }
    else if(number < 0) {
        for(let i = number; i<= 0; i++) {
            sum += i;
        }
    }
    return sum;
}


console.log(sumOfNumbers(5));
console.log(sumOfNumbers(-5));
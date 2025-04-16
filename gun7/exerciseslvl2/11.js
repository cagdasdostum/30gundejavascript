//Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(number) {
    let sum = 0;
    for (let i= 1; i <= number; i++) {
        if(i % 2 === 1) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumOfOdds(11));
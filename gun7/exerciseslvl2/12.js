//Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(number) {
    let sum = 0;
    for(let i = 1; i<=number; i++) {
        if(i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumOfEven(10));
//Write a function which takes any number of arguments and return the sum of the arguments
function sumArguments() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sumArguments(1, 2, 3));        // Output: 6
console.log(sumArguments(5, 10, 15, 20)); // Output: 50
console.log(sumArguments(2, 4, 6, 8, 10));  // Output: 30
console.log(sumArguments());             // Output: 0 (no arguments)
console.log(sumArguments(100));          // Output: 100
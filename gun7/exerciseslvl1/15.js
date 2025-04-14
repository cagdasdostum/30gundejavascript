//Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax (arg1, arg2, arg3) {
    maxArg = arg1;
    if(arg2>=maxArg) {
        maxArg = arg2;
    }
    if(arg3>=maxArg) {
        maxArg = arg3;
    }

    return maxArg;
}

console.log(findMax(50, 210, 1125));
console.log(findMax(0, -10, -2));
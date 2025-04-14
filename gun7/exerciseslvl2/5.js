//Declare a function name swapValues. This function swaps value of x to y.

const swapValues = (x,y) => {
    let tempY = y;
    y = x;
    x = tempY;
    return [x,y];
}

console.log(swapValues(5,7));
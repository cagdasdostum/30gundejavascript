//Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray (arr) {
    if(!Array.isArray(arr)) {
        return 'input must be an array!';
    }
    const capitalizedarray = [];
    for(let i = 0; i<arr.length; i++) {
        const element = arr[i];
        if(typeof element === 'string') {
            capitalizedarray.push(element.toUpperCase());
        }
        else {
            capitalizedarray.push(element);
        }

    }
    return capitalizedarray;
}

const myArray = ["apple", "banana", "cherry"];
const capitalizedArray = capitalizeArray(myArray);
console.log(capitalizedArray); // Output: ["APPLE", "BANANA", "CHERRY"]
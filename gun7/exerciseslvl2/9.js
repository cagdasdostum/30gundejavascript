//Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(array, index) {
    if(index < 0 || index >= array.length) {
        return array;
    }
    const newArray = [...array.slice(0,index), ...array.slice(index + 1)];
    return newArray;
}

const myArray = [10, 20, 30, 40, 50];
const indexToRemove = 2;
const updatedArray = removeItem(myArray, indexToRemove);
console.log(updatedArray); // Output: [10, 20, 40, 50]
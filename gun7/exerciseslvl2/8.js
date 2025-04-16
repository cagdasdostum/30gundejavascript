//Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(array, itemParameter) {
    const newArray = [...array];
    newArray.push(itemParameter);
    return newArray;
}

const array1 = [1,2,3];
console.log(addItem(array1,4));
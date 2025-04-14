//Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr) {
    let arrReversed = Array(arr.length);
    let i = 0;
       for(let j = arr.length-1; j>=0; j--) {
            arrReversed[i] = arr[j];
            i++;

       } 
    return arrReversed;
}
console.log(reverseArray([1, 2, 3, 4, 5]))
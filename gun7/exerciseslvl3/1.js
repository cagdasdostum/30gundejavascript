//Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

function userIdGeneratedByUser() {
    let numOfCharsStr = prompt('enter numberof characters:');
    let numOfIdsStr = prompt('enter number of ids:');

    numOfChars = parseInt(numOfCharsStr);
    numOfIds = parseInt(numOfIdsStr);
    let idArray = [];
     // Check if the inputs are valid numbers
     if (isNaN(numOfChars) || isNaN(numOfIds) || numOfChars <= 0 || numOfIds <= 0) {
        return "Invalid input. Please enter positive numbers for the number of characters and IDs.";
    }

    for(let i = 0; i < numOfIds; i++) {
        idArray.push(userIdGenerator(numOfChars));
    }
    
    return idArray;


}

function userIdGenerator(numOfChars) {
    let randomId = '';
    const rakamlar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const buyukHarfler = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const kucukHarfler = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    // spread syntax (...) kullanarak dizileri birleştir
    const karakterler = [...rakamlar, ...buyukHarfler, ...kucukHarfler];
    while (randomId.length < numOfChars) {
        randomId += karakterler[Math.floor(Math.random() * karakterler.length)];
    }
    return randomId;
}

console.log(userIdGeneratedByUser());
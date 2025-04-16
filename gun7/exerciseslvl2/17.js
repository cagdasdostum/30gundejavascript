//Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
function randomHexaNumberGenerator() {
    const hexDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexaNumber = '';

    for (let i = 0; i < 3; i++) {
        const firstDigit = hexDigits[Math.floor(Math.random() * hexDigits.length)];
        const secondDigit = hexDigits[Math.floor(Math.random() * hexDigits.length)];
        const segment = firstDigit + secondDigit;

        hexaNumber += segment;

    }
    return hexaNumber;
}

console.log(randomHexaNumberGenerator());
console.log(randomHexaNumberGenerator());
console.log(randomHexaNumberGenerator());
//Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator() {
    let randomId = '';
    const rakamlar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const buyukHarfler = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const kucukHarfler = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    // spread syntax (...) kullanarak dizileri birleştir
    const karakterler = [...rakamlar, ...buyukHarfler, ...kucukHarfler];
    while (randomId.length < 7) {
        randomId += karakterler[Math.floor(Math.random() * karakterler.length)];
    }
    return randomId;
}

console.log(userIdGenerator());
console.log(userIdGenerator());
console.log(userIdGenerator());
//Writ a function which generates a randomUserIp.
function randomUserIp() {
    let a, b, c, d;
    a = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    c = Math.floor(Math.random() * 256);
    d = Math.floor(Math.random() * 256);

    return `${a}.${b}.${c}.${d}`;
}

console.log(randomUserIp());
console.log(randomUserIp());
console.log(randomUserIp());
console.log(randomUserIp());
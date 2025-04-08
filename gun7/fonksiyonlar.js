// bir fonksiyon birkaç şekilde tanımlanabilir:
    // 1. klasik tanımlama
    // 2. expression function
    // 3. anonim function
    // 4. arrow function

// klasik tanımlama
function fonksiyon1() {
    console.log('ilk fonksiyon tanımlandı.');
}
fonksiyon1();

// anonim fonksiyon
const anonimFun = function() {
    console.log('anonim fonksiyon tanımlandı.');
}
anonimFun();

// expression function
const square = function() {
    let num = 2;
    let square = num * num;
    console.log(square);
}
square(); // 4

// bir değer döndüren fonksiyon
function printFullName() {
    let name = 'jane';
    let lastname = 'doe';
    let space = ' ';
    let fullname = name + space + lastname;

    return fullname;
}
console.log(printFullName());

// parametreli fonksiyon
function areaOfCircle(r) {
    let area = Math.PI * r * r;
    return area;
}
console.log(areaOfCircle(10));

// arrow function
const squareArrow = n => {
    return n*n;
}

const printFullNameArrow = (firstName, lastName) => {
    firstName='cado';
    lastName='cadocado';
    let fuullname = firstName+lastName;
    return fuullname;
}
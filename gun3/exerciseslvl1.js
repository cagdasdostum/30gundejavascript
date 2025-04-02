//1
//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'çağdaş';
let lastName = 'çalayır';
let country = 'türkiye';
let city = 'izmir';
let age = 21;
let isMarried = false;
let year = new Date().getFullYear();
console.log(typeof(firstName)); //string
console.log(typeof(lastName)); //string
console.log(typeof(country)); //string
console.log(typeof(city)); //string
console.log(typeof(age)); //number
console.log(typeof(isMarried)); //boolean
console.log(typeof(year)); //number

//2
//Check if type of '10' is equal to 10
console.log(typeof('10') === typeof(10));   //false

//3
//Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10);    //false

//4
//Boolean value is either true or false.

//i. Write three JavaScript statement which provide truthy value.
//ii. Write three JavaScript statement which provide falsy value.

//i.
console.log(typeof('42.5') === typeof('mehmet1'));
console.log(7>1);
console.log(parseInt('2') === 2);

//ii.
console.log(typeof('42.5') === typeof(42.5));
console.log(20 >= 15);
console.log(parseInt(9.5) === 10);

//5
//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

4>3 // true

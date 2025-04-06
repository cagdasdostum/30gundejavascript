//1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let userInput = prompt('enter your age:');
if(parseInt(userInput) >= 18) {
    alert('you are old enough to drive.');
}
else {
    alert(`You are left with ${18 - parseInt(userInput)} years to drive.`);
}

//2. If a is greater than b return 'a is greater than b' else 'a is less than b'.  ternany operator
let a = 5;
let b = 3;
let islem = a > b;
console.log(islem
    ? `a, b'den büyük`
    : `b, a'dan büyük`);

//3.Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number = prompt('enter a number:');
let numberInt = parseInt(number);
if(numberInt % 2 == 1) {
    alert(`${numberInt} is an odd number.`);
}
else {
    alert(`${numberInt} is an even number.`);
}

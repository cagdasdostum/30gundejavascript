//1.Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt('enter base', 'enter base');
let height = prompt('enter height', 'enter height');
let area = 0.5 * base * height;
console.log(area);

//2.Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let sideA = prompt('enter side a');
let sideB = prompt('enter side b');
let sideC = prompt('enter side c');
let perimeter = parseInt(sideA) + parseInt(sideB) + parseInt(sideC);
console.log(perimeter);

//3.Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = prompt('length:');
let width = prompt('width:');
let rectangleArea = 2 * parseInt(length) + 2 * parseInt(width);
console.log(rectangleArea);

//4.Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = prompt('radius = ');
const PI = 3.14;
let circleArea = 2 * parseInt(radius) * PI;
console.log(circleArea);

//5.Calculate the slope, x-intercept and y-intercept of y = 2x -2
// Define the equation parameters
const slope = 2; // Coefficient of x
const yIntercept = -2; // Constant term

// Calculate x-intercept (set y = 0 and solve for x)
const xIntercept = -yIntercept / slope;

// Output results
console.log("Slope:", slope);
console.log("X-Intercept:", xIntercept);
console.log("Y-Intercept:", yIntercept);

//6.Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let y2 = 10;
let y1 = 2;
let x2 = 6;
let x1 = 2;
let m = (y2-y1)/(x2-x1);
console.log(m);

//9.Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let enterHours = prompt('Enter hours:');
let enterRatePerHour = prompt('Enter rate per hour:');
let weeklyPay = parseInt(enterHours) * parseInt(enterRatePerHour);
console.log(`Your weekly earning is ${weeklyPay} `);

//10.If the length of your name is greater than 7 say, your name is long else say your name is short.
let namee = 'çağdaş';
let namee2 = 'abdulrezzak';
console.log(namee.length > 7 ? 'ismin uzun' : 'ismin kısa'); // 'ismin kısa'
console.log(namee2.length > 7 ? 'ismin uzun' : 'ismin kısa'); // 'ismin uzun'

//11.Compare your first name length and your family name length and you should get this output.
let fsName = 'çağdaş';
let lsName = 'çalayır';
console.log(fsName.length > lsName.length ? 'Ad soyaddan daha uzun.' : 'soyad Addan daha uzun.');

//12.Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 211;
let yourAge = 115;
console.log(`I am ${myAge - yourAge} years older than you.`);

//13.Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let getYear = prompt('enter your birth year:');
let drivingYear = new Date().getFullYear() - parseInt(getYear);
console.log(drivingYear >= 18 ? 'araba sürebilcek yaşta.' : 'daha aaraba surecek yaşa gelmemiş');

//14.Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let numberofyears = prompt('enter number of years:');
let secondsLived = parseInt(numberofyears) * 365 * 24 * 60 * 60; //yılı saniyeye çevirdi
console.log(secondsLived);

//15.Create a human readable time format using the Date time object
const dateTime = new Date();
console.log(`${dateTime.getFullYear}-${dateTime.getMonth+1}-${dateTime.getDate} ${dateTime.getHours}:${dateTime.getMinutes}`);
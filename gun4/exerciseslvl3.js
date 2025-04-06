//3. Write a program which tells the number of days in a month, now consider leap year.
let year = prompt('enter a year:');
let yearInt = parseInt(year);
let isLeap = false;
if(yearInt % 400 == 0) {
    isLeap = true;
}
else if (yearInt % 100 == 0) {
    isLeap = false;
}
else if (yearInt % 4 == 0) {
    isLeap = true;
}
else {
    isLeap = false;
}

let month = prompt('enter a month:');
month = month.toLowerCase();
let days;
switch (month) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        days = 31; break;
    
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        days = 30; break;

    case 'february':
        if(isLeap == true) {
            days = 29;
        }
        else {
            days = 28;
        }

    default:
        console.log('month not found');
        days = undefined;
        break;
}

console.log(`in ${year}, ${month} has ${days} days.`);
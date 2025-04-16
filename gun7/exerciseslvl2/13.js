//Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(numberParam) {
    let oddsCount = 0;
    let evensCount = 0;
    if (numberParam <= 0) {
        console.log('invalid input');
    }
    else {
        for (let i = 0; i <= numberParam; i++) {
            (i % 2 === 0) ? evensCount++ : oddsCount++;
        }
    }
    return `number of odds ${oddsCount}, number of evens ${evensCount}`;
}

console.log(evensAndOdds(20));
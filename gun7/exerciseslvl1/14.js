//Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
let season;
function checkSeason(monthParameter) {

    switch(monthParameter) {
        case 12:
        case 'december':
        case 1:
        case 'january':
        case 2:
        case 'february':
        season = 'Winter'; break;

        case 3:
        case 'march':
        case 4:
        case 'april':
        case 5:
        case 'may':
            season = 'Spring'; break;

        case 6:
        case 'june':
        case 7:
        case 'july':
        case 8:
        case 'august':
            season = 'Summer'; break;

        case 9:
        case 'september':
        case 10:
        case 'october':
        case 11:
        case 'november':
            season = 'Autumn'; break;
    }
    return season;
}

console.log(checkSeason(6));
console.log(checkSeason('januaRy'.toLowerCase()));

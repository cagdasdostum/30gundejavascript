//1. Write a code which can give grades to students according to theirs scores: - 80-100, A / - 70-89, B / - 60-69, C / - 50-59, D / - 0-49, F
let score = prompt('Enter your score:');
let scoreInt = parseInt(score);

if (scoreInt >= 80 && scoreInt <= 100) {
    console.log('A');
} else if (scoreInt >= 70 && scoreInt <= 79) {
    console.log('B');
} else if (scoreInt >= 60 && scoreInt <= 69) {
    console.log('C');
} else if (scoreInt >= 50 && scoreInt <= 59) {
    console.log('D');
} else if (scoreInt >= 0 && scoreInt <= 49) {
    console.log('F');
} else {
    console.log('Böyle bir not yok');
}

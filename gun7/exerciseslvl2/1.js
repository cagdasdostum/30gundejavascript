//Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a,b,c) {
    if(a === 0 && b === 0) {
        if(c === 0) {
            return 'Infinitely many solutions (0 == 0)';
        }
        else {
            return 'No solution (constant is non-zero)';
        }
    }
    else if(a === 0) {
        if(b != 0) {
            const y = -c / b;
            return `y = ${y}`;
        }
        else {
            // this case is handled in first if condition a=0, b=0
        }
    }
    else if(b === 0) {
        const x = -c / a;
        return `x = ${x}`;
    }

    else {
        return `y = (-${a}x -${c}) / ${b}`;
    }

}
console.log(solveLinEquation(0, 5, -10));
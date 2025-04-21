a = 'javascript'    //var veya let kullanamdan direkt tanımlanan değişken global kapsam 
b = 10              // window objesinde erişilebilen
function letsLearnScope() {
    console.log(a,b);
    if (true) {
        console.log(a,b);
    }

}
console.log(a,b);   // erişilebilira



let x = 'javascript';
let y = 10;
function letsLearnScopee() {
    console.log(x,y); // 'javascript', 10
    if(true) {
        x = 'java';
        y = 20;
    }
    return [x,y]; 
}
console.log(x,y); // 'javascript', 10
console.log(letsLearnScopee()); // 'java', 20


//The scope let and const are the same. The difference is only reassigning. We can not change or reassign the value of the const variable. I would strongly suggest you to use let and const, by using let and const you will write clean code and avoid hard to debug mistakes. As a rule of thumb, you can use let for any value which change, const for any constant value, and for an array, object, arrow function and function expression.

//tamam abi


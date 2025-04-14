//Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
function calcBMI (weight, height) {
    let bmi = weight / (height * height);
    if(bmi <= 18.5) {
        return 'underweight';
    }
    else if (bmi <= 24.9 && bmi > 18.5) {
        return 'normal weight';
    }
    else if(bmi <= 29.9 && bmi > 24.9) {
        return 'overweight';
    }
    else {
        return 'obese';
    }
}

console.log(calcBMI(80,1.90));

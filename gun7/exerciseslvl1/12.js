//Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit (celcius) {
    let fahreneit = (celcius / 1.8) + 32;
    return fahreneit;
}
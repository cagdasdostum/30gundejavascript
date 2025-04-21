//Write a function name rgbColorGenerator and it generates rgb colors.

function rgbColorGenerator() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let rgb = `rgb(${r},${g},${b})`;
    return rgb;
}

console.log(rgbColorGenerator());
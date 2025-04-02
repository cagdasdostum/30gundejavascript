
let now = new Date();

let year = now.getFullYear();
let month = String(now.getMonth() + 1).padStart(2, '0'); // Ensure two digits
let day = String(now.getDate()).padStart(2, '0'); // Ensure two digits
let hours = String(now.getHours()).padStart(2, '0'); // Ensure two digits
let minutes = String(now.getMinutes()).padStart(2, '0'); // Ensure two digits

let sonuc = `${year}-${month}-${day} ${hours}:${minutes}`;


console.log(getFormattedTime());

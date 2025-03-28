/* Math Object */
const PI = Math.PI; // 3.141592653589793

Math.round(PI); // 3'e yuvarlayacak.
Math.round(9.81); // 10'a yuvarlayacak.
Math.floor(6.56); // 6'ya yuvarlayacak.
Math.ceil(PI); //4'e yuvarlayacak.
Math.min((4,6,8,9,-1,24)); // -1 returns
Math.max((4,6,8,9,-1,24)); // 24 returns
const randNum = Math.random(); // 0 0.99999 arası rastgele sayı üretir.
const num = Math.floor(Math.random() * 11); // 0 10 arası rastgele tam sayı üretimi
Math.abs(-10); // mutlak değer
Math.sqrt(10); // 100
Math.pow(3,2); // 9
Math.E; // e sayısı 2.71
Math.log(2); // logaritma
Math.cos(60); //

/* Math Object bitti */

/*------------------------------------------------------------------------------------------------*/

/*Strings*/
let fullname = namee + lastname; //string concatenation
const paragraph = "çağdaş gel git getir götür al ver sat al bidik twit yapcak iş pekiştir";
const paragraph2 = "çağdaş gel git\
                    getir götür\
                    al ver sat bidik\
                    twit yapcak iş pekiştir";

console.log('yeni satıra\nşimdi geçti. '/* \n alt satır*/ + 
            'tab yapmak için \t' /* \t tab */ +
            ' \\ back slash' /* \\ back slash*/ +
            '\' single quote ' /* \' single quote */ +
            '\" double quote' /* \" double quote */ 
);


let a = 2;
let b = 3;
console.log(`${a} is greater than ${b}: ${a > b}`);

let js = 'javascript';
console.log(js.length); // 10
console.log(js.toUpperCase); // JAVASCRIPT
console.log(js.substring(0,4)); //java

let splittt = '30 gün javascript';
console.log(splittt.split()); // arraye dönüşür ['30 gün javascript']
console.log(splittt.split(' ')); // ["30", "gün", "javascript"]
console.log(js.split('')); // ['j','a','v','a','s','c','r','i','p','t']

let trimm = '   çado   ';
console.log(trimm.trim()); // boşlukları kaldırır

console.log(splittt.includes('30')); // true
console.log(splittt.includes('Gün')); // false çünkü büüyük küçük harf hassasiyetli

console.log(splittt.replace('javascript', 'c#')); // string = '30 gün c#'

/*Strings bitti*/

/* Type casting */
let numm = '10';
nummInt = parseInt(numm);
console.log(nummInt); // 10




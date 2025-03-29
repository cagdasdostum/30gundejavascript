//1
let challenge = '30 Days Of JavaScript';
//2
console.log(challenge);
//3
console.log(challenge.length);
//4
console.log(challenge.toUpperCase);
//5
console.log(challenge.toLowerCase);
//6
console.log(challenge.substring(0,2));
//7
console.log(challenge.slice(3));
//8
console.log(challenge.includes('Script'));
//9
console.log(challenge.split(''));
//10
console.log(challenge.split(' '));
//11
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', '));
//12
console.log(challenge.replace('JavaScript','Python'));
//13
console.log(challenge.charAt(15));
//14
console.log(challenge.charCodeAt(3));
//15
console.log(challenge.indexOf('a'));
//16
console.log(challenge.lastIndexOf('a'));
//17
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));
//18
console.log(sentence.lastIndexOf('because'));
//19
console.log(sentence.search('because'));
//20
console.log(sentence.trim());
//21
console.log(challenge.startsWith('30 Days'));
//22
console.log(challenge.endsWith('JavaScript'));
//23
console.log(challenge.match('/a/g'))
//24
let part1 = '30 Days Of';
let part2 = 'JavaScript';
console.log(part1.concat('',part2));
//25
console.log(challenge.repeat(2));   


/* Exercises level 2 */

//1
//Using console.log() print out the following statement:
console.log(`The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another`);

//2
//Using console.log() print out the following quote by Mother Teresa:
console.log(`\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"`);

//3
//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let v1 = '10';
let v2 = 10;
typeof(v1) === typeof(v2);
v1Int = parseInt(v1);

//4
//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
parseFloat('9.8') === 10
let v3 = 9.8;
console.log(Math.round(v3));

//5
//Check if 'on' is found in both python and jargon
let w1 = 'python';
let w2 = 'jargon';
let subb = 'on';

const check1 = w1.includes(subb);
const check2 = w2.includes(subb);
const checkBoth = check1 && check2;

//6
//I hope this course is not full of jargon. Check if jargon is in the sentence.
const cumle = 'I hope this course is not full of jargon.';
console.log(cumle.includes('jargon'));

//7
//Generate a random number between 0 and 100 inclusively.
let rndNum1 = Math.floor(Math.random() * 101);

//8
//Generate a random number between 50 and 100 inclusively.
let rndNum2 = Math.floor((Math.random() * 51)) + 50;

//9
//Generate a random number between 0 and 255 inclusively.
let rndNum3 = Math.floor(Math.random() * 255);

//10
//Access the 'JavaScript' string characters using a random number.
// ??????????

//11
//Use console.log() and escape characters to print the following pattern.
console.log(`1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125`);

//12
//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sencence = 'You cannot end a sentence with because because because is a conjunction';
let phrasse = sencence.substring(30, 54);
console.log(phrasse);


/* Exercises level 3 */

//1
//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let sent = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let keyword = 'love';
console.log(sent.match(keyword));

//2
//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let cumlee = 'You cannot end a sentence with because because because is a conjunction';
console.log(cumlee.match(/because/g));

//3
//Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentenc = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let duzelt1 = sentenc.replaceAll('%','');
let duzelt2 = duzelt1.replaceAll('@','');
let duzelt3 = duzelt2.replaceAll('$','');
let duzelt4 = duzelt3.replaceAll('&','');
let duzelt5 = duzelt4.replaceAll('#','');
let duzelt6 = duzelt5.replaceAll(';','');
console.log(duzelt6);

//4
//Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let total = text.match(/\d+/g);
let sum = parseInt(total[0]) + parseInt(total[1]) + parseInt(total[2]);
console.log(sum);    

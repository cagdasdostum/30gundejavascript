const arr = []; //bu array tanımlamanın en kabul gören yoludur.
console.log(arr);

const array1 = [
    'çağdaş',
    'çalayır',
    '2312102045',
    false,
    'bilişim sistemleri mühendisliği',
    2
];  // arrayler farklı veri tiplerinden oluşan değerler alabilir.

const eightemptyvalues = Array(8); // 8 eleman alabilen dizi oluşturur.
console.log(eightemptyvalues);

//fill
const eightXvalues = Array(8).fill('X');   // 8 eleman alan dizi oluşturup hepsine 'X' değerini koyar.
console.log(eightXvalues);

//concat
const firstArray = [1, 2, 3];
const secondArray = [3, 2, 1];
const thirdArray = firstArray.concat(secondArray); // ilk diziyle ikinci diziyi birleştirip üçüncü diziyi oluşturur.
console.log(thirdArray);

//getting array length
console.log(thirdArray.length); //6

//getting index an element in array
console.log(thirdArray.indexOf(4)); // -1
// eğer mevcut değilse -1 döndürür. 
console.log(thirdArray.indexOf(3)); // iki tane var ama ilkinin indexini döndürdü.

//Getting last index of an element in array
console.log(thirdArray.lastIndexOf(3)); // işte  burada 3 döndürür çünkü 3 sayısının bulundupu indexlerin en sonuncusunu döndürüyor.
// yine aynı şekil eğer bulunmuyorsa -1 döner.

//includes:To check if an item exist in an array. If it exist it returns the true else it returns false.
console.log(thirdArray.includes(5)); // false
console.log(thirdArray.includes(1)); // true

// Checking Array => Array.isArray(arrayName);
let buDiziDegil = 15;
console.log(Array.isArray(thirdArray)); //true
console.log(Array.isArray(buDiziDegil)); //false

//toString: converts array to string.
console.log(thirdArray.toString()); //1,2,3,3,2,1

//join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.
const namees = ['çağdaş', 'pınar', 'aybars', 'umay'];
console.log(namees.join()); //çağdaş,pınar,aybars,umay
console.log(namees.join(' ')); //çağdaş pınar aybars umay
console.log(namees.join('#')); //çağdaş#pınar#aybars#umay

//Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.
const numeros = [1, 2, 3, 4, 5, 6, 7];
console.log(numeros.slice());   // aynı diziyi verir.
console.log(numeros.slice(0));  // aynı diziyi verir.
console.log(numeros.slice(0, numeros.length));   // aynı diziyi verir.
console.log(numeros.slice(1, 4));    //[2,3,4] // it doesn't include the ending position

//Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.
const numbers = [1, 2, 3, 4, 5, 6]
numbers.splice(3, 3, 7, 8, 9)
console.log(numbers.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

//Push: adding item in the end. To add item to the end of an existing array we use the push method.
const arrPush = ['ahmet','mehmet'];
arrPush.push('ayşe');
arrPush.push('fatma');
console.log(arrPush);   //['ahmet','mehmet','ayşe','fatma']

//pop: Removing item in the end.
const arrPop = ['101', 'okey', 'pişti', 'papaz kimde'];
arrPop.pop();
console.log(arrPop);    //['101', 'okey', 'pişti']

//shift: Removing one array element in the beginning of the array.
const arrShift = [1,2,3,4,5];
arrShift.shift();
console.log(arrShift);  //[ 2, 3, 4, 5 ]

//unshift: Adding array element in the beginning of the array.
const arrUnshift = [1,2,3,4,5];
arrUnshift.unshift(0);
console.log(arrUnshift);    //[ 0, 1, 2, 3, 4, 5 ]

//reverse: reverse the order of an array.
const sayilar = [1,2,3,4,5];
console.log(sayilar);   //[ 1, 2, 3, 4, 5 ]

const sayilarReversed = sayilar.reverse();
console.log(sayilarReversed);   //[ 5, 4, 3, 2, 1 ]

//sort: arrange array elements in ascending order. Sort takes a call back function, we will see how we use sort with a call back function in the coming sections.
const webTechs =  [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];
const sortedWebTechs = webTechs.sort();
console.log(sortedWebTechs);    //[ 'CSS', 'HTML', 'JavaScript', 'MongoDB', 'Node', 'React', 'Redux' ]
sortedWebTechs.reverse(); // tersine de sıralanıyor.

//Array can store different data types including an array itself. Let us create an array of arrays
const ilkDizi = [1,2,3];
const ikinciDizi = [3,4,5];
const dizilerinDizisi = [[12,34,56],[3,4,6]];
console.log(dizilerinDizisi[0]);








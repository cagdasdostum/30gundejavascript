//1. Write a loop that makes the following pattern using console.log():
/*
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/
for (let i = 0; i < 7; i++) {
    let arr = [];
    for (let j = 0; j < 7; j++) {
        arr.push('#');
        console.log(arr.toString());
    }
    console.log('');
}

//2. Use loop to print the following pattern:
/*
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100 
*/
for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}

//3. Develop a small script which generate array of 5 random numbers
let array1 = Array(5);
for(let i = 0; i < array1.length; i++) {
    array1[i] = Math.floor(Math.random() * 100); 
}

console.log(array1);

//4. Develop a small script which generate array of 5 random numbers and the numbers must be unique
let array2 = Array(5);
for(let i = 0; i < array2.length; i++) {
    let randomNum = Math.floor(Math.random() * 100);
    if(!array2.includes(randomNum))
    array2[i] = randomNum; 
}
console.log(array2);

//5. Develop a small script which generate a six characters random id:

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let randomID = '';
for(let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomID += characters.charAt(randomIndex);
}

console.log(randomID);
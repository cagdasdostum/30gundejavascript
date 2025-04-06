const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//1. Sort the array and find the min and max a  ge
let sorted = ages.sort();
console.log(sorted);
console.log(`min age:${sorted[0]}, max age:${sorted[sorted.length - 1]}`);
//2. Find the median age(one middle item or two middle items divided by two)
let medianAge;
if (sorted.length % 2 == 0) {

    medianAge = (sorted[sorted.length / 2] + sorted[(sorted.length / 2) + 1]) / 2;
}
else {
    medianAge = sorted[sorted.length / 2];
}
console.log(medianAge);

//3. Find the average age(all items divided by number of items)
let averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;
console.log(averageAge);
//4. Find the range of the ages(max minus min)
//5. Compare the value of (min - average) and (max - average), use abs() method
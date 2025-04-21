//Get name, legs, color, age and bark value from the dog object

const dog = {
    name: 'duduk',
    legs: 4,
    color: 'gray',
    age: 5,
    bark: function bark() {
        return 'woof woof';
    },
    
}
const dogValues = Object.values(dog);
console.log(dogValues);
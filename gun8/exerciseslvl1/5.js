//Set new properties the dog object: breed, getDogInfo

const dog = {
    name: 'duduk',
    legs: 4,
    color: 'gray',
    age: 5,
    bark: function bark() {
        return 'woof woof';
    },

}

dog.breed = 'malaklı karabaş';
dog.getDogInfo = function getDogInfo() {
    return `name: ${dog.name}\nage: ${dog.age}\nbreed: ${dog.breed}`;
}

console.log(dog.getDogInfo());
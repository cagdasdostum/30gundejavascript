const rectangle = {
    length: 20,
    width: 20,
}
console.log(rectangle);

const person = {
    firstName: 'çağdaş',
    lastName: 'çalayır',
    age: 20,
    isMarried: false,
    skills: [
        'html',
        'css',
        'javascript',
        'mssql',
        'oop',
        'java',
        'basketball'
    ],
    country: 'türkiye',
    city: 'izmir',
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },

}

console.log(person);
console.log(person.getFullName());
console.log(person['skills']);

const copyPerson = Object.assign({}, person);
console.log(copyPerson);

const personKeys = Object.keys(person);
console.log(personKeys);

const personValues = Object.values(person);
console.log(personValues);

console.log(copyPerson.hasOwnProperty('name'));
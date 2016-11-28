"use strict"

class Person {

    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    };

    get fullName() {
        let name;

        name = `${this.firstName} ${this.lastName}`;

        return name;
    };

    upperCaseName() {
        let name, upperCaseName;

        name = this.fullName;
        upperCaseName = name.toUpperCase();

        return upperCaseName;
    };
};

let person = new Person('Filipe', 'Silva');

console.log(person.upperCaseName());

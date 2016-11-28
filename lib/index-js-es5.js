"use strict";

var Person = function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    return this.getFullName();
};

Person.prototype = {
    fullName: null,
    getFullName: function getFullName() {
        var name = void 0;

        name = this.firstName + ' ' + this.lastName;

        this.fullName = name;

        return this;
    },
    getUpperCaseName: function getUpperCaseName() {
        var name = void 0,
            upperCaseName = void 0;

        name = this.fullName;

        upperCaseName = name.toUpperCase();

        return upperCaseName;
    }
};

var person = new Person('Filipe', 'Silva');

console.log(person.getUpperCaseName());
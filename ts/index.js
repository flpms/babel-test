"use strict";
var Person = (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    ;
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            var fullname;
            fullname = this.firstName + " " + this.lastName;
            return fullname;
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.upperCaseName = function () {
        var name, upperCaseName;
        name = this.fullName;
        upperCaseName = name.toUpperCase();
        return upperCaseName;
    };
    ;
    return Person;
}());
;
var person = new Person('Filipe', 'Silva');
console.log(person.upperCaseName());

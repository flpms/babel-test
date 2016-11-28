"use strict";

var Person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

Person.prototype = {
  getFullName: function() {
    let name;

    name = this.firstName + ' ' + this.lastName;

    return this;
  },
  getUpperCaseName: function() {
    let name, upperCaseName;

    name = this.getFullName();

    upperCaseName = name.toUpperCase();

    return upperCaseName;
  }
};

var person = new Person('Filipe', 'Silva');

console.log(person.getUpperCaseName());

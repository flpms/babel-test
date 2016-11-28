"use strict";

class Person {

  constructor(private firstName:string, private lastName:string){
    this.firstName = firstName;
    this.lastName = lastName;
  };

  get fullName() {
    let fullname:string;
    fullname = `${this.firstName} ${this.lastName}`;
    return fullname;
  }

  upperCaseName() {
      let name, upperCaseName;

      name = this.fullName;
      upperCaseName = name.toUpperCase();

      return upperCaseName;
  };
};

let person = new Person('Filipe', 'Silva');

console.log(person.upperCaseName());

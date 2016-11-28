"use strict";

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Person = function () {
    function Person(firstName, lastName) {
        _classCallCheck(this, Person);

        this.firstName = firstName;
        this.lastName = lastName;
    }

    _createClass(Person, [{
        key: 'upperCaseName',
        value: function upperCaseName() {
            var name = void 0,
                upperCaseName = void 0;

            name = this.fullName;
            upperCaseName = name.toUpperCase();

            return upperCaseName;
        }
    }, {
        key: 'fullName',
        get: function get() {
            var name = void 0;

            name = this.firstName + ' ' + this.lastName;

            return name;
        }
    }]);

    return Person;
}();

;

var person = new Person('Filipe', 'Silva');

console.log(person.upperCaseName());

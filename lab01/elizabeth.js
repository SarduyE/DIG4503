const Person = require("./person.js");

class Elizabeth extends Person {
  constructor(name, color){
    super(name, color);
  }
}

module.exports = Elizabeth;
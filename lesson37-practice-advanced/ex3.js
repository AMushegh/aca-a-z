const person = {
  _firstName: "John",
  _lastName: "Doe",

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  },

  set fullName(value) {
    if (typeof value === "string") {
      const splittedValue = value.split(" ");
      if (splittedValue.length === 2) {
        this._firstName = splittedValue[0];
        this._lastName = splittedValue[1];
      } else {
        console.error("argument should contain two words");
      }
    } else {
      console.error("argument should be string");
    }
  },
};

console.log(person.fullName); // "John Doe"
person.fullName = "Jane Smith";
console.log(person.fullName); // "Jane Smith"
person.fullName = "OneNameOnly";
// Should log: "Invalid full name format.
console.log(person.fullName); // Still "Jane Smith"

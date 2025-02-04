let laptop = {
  brand: "apple",
  turnOn: function () {
    const a = () => {
      console.log(this);
    };

    return a;
  },
};

// let testFunction = laptop.turnOn();
// testFunction(); // prints laptop object

let laptopFunctionObject = laptop.turnOn;
let test = laptopFunctionObject();
test(); // prints window

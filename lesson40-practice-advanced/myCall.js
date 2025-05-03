Function.prototype.myCall = function (customThis, ...restParams) {
  const thisCopy = this.bind(customThis);
  return thisCopy(...restParams);
};

Function.prototype.myApply = function (customThis, restParams) {
  const thisCopy = this.bind(customThis);
  return thisCopy(...restParams);
};

Function.prototype.myBind = function (customThis, ...restParams) {
  return function () {
    this.apply(customThis, ...restParams);
  };
};

let obj = {
  name: "mushegh",

  getInfo(a) {
    return this.name + " " + a;
  },
};

let testMyCall = obj.getInfo.myCall({ name: "Armen" }, "testcall");
let testMyApply = obj.getInfo.myApply({ name: "Armen" }, ["testcall"]);

const testMyBind = obj.getInfo.bind({ name: "Armen" });
console.log(testMyBind());

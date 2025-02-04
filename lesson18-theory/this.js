function foo() {
  console.log(this);
}

let obj = {
  a: "a",
  method: foo,
};

foo(); // window.foo()
obj.method();

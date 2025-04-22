function foo() {
  console.log(this);
}

foo();

let obj = {
  test: foo,
};

obj.test();

let a = 10;

function foo() {
  console.log(a);
}

foo(1);

// Creation Phase
// 1. Variable Object Creation
//    1.1 Hoisting
// 2. Defining Scope Chain
// 3. this creation -> window
// Execution Phase

let obj = {
  method: () => {
    console.log(this);
  },
};

obj.method();

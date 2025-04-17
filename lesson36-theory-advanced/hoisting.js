// variables with var, function declarations are being 'hoisted'

function foo() {
  console.log(a);
  var a = 1;

  function boo() {
    console.log("boo");
  }
}

foo();

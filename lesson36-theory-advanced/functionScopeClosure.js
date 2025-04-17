function functionCreator() {
  let counter = 0;

  return function () {
    console.log(++counter);
  };
}

let test = functionCreator();

test();
test();

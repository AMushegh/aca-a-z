let a = function () {}; //

let b = {
  c: () => {
    const l = () => {};

    return l;
  },
};
a = b.c();

a(); //

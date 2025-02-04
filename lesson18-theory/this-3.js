function showThis() {
  console.log(this);
}

const a = {
  name: "a",
  method: showThis,
};

const b = {
  name: "b",
  method: showThis,
};

const c = {
  name: "c",
  method: function () {
    console.log(c === this);
  },
};

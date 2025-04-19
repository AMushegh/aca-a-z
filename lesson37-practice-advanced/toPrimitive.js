let a = {
  value: 1,
  toString() {
    return ++this.value;
  },
};

if (a == 2 && a == 3 && a == 4) {
  console.log("here");
}

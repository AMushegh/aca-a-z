let array = [1, "435", 2, null, 3, false, 4, 5];

let res = array.every((el) => {
  console.log(el);
  return typeof el === "number";
});

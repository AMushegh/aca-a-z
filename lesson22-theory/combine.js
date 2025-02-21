let array = [1, "435", 2, null, 3, false, 4, 5];

console.log(array.filter((el) => typeof el === "number").map((el) => el * 10));

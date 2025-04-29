function handleArguments() {
  const args = Array.from(arguments);
  if (args.length === 0) {
    return null;
  }
  if (args.some((el) => typeof el === "boolean")) {
    return args.join();
  }
  if (args.every((el) => typeof el === "number")) {
    return args.reduce((a, b) => a + b);
  }
  if (args.some((el) => typeof el === "string")) {
    return args.filter((el) => typeof el === "string");
  }
}

let res = handleArguments(1, 2, 1);
// console.log(res);

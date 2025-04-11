// Object property flags and descriptors

let bank = {
  loanPercent: 13,
  test: 12,
};

Object.defineProperty(bank, "loanPercent", {
  writable: false,
  enumerable: false,
});
console.log(Object.getOwnPropertyDescriptor(bank, "loanPercent"));

bank.loanPercent = 8408329482390;

for (const key in bank) {
  console.log(key);
}

let cart = {
  Shampoo: 5.99,
  "Rubber Ducks": 15.99,
};
let sum = 0;
for (const key in cart) {
  sum += cart[key];
}
console.log(sum > 50);

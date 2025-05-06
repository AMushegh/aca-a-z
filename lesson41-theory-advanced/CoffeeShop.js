class OrderQueue {
  orders = [];

  addOrder(order) {
    this.orders.push(order);
  }

  fulfillOrder() {
    this.orders.pop();
  }
}

class CoffeeShop {
  orders = new OrderQueue();

  constructor(name, menu) {
    this.name = name;
    this.menu = menu;
  }
}

class Item {
  constructor(name, price, type) {
    this.name = name;
    this.price = price;
    this.type = type;
  }
}

const americano = new Item("americano", 10, "drink");
const pizza = new Item("cookie", 15, "food");

const coffeeShop = new CoffeeShop("CoffeeHouse", [americano, pizza]);

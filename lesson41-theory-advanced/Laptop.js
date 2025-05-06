function getUniqueId() {
  return Math.random().toString(36).substr(2, 9);
}

class Laptop {
  #serialNumber = getUniqueId();

  constructor(brand, model, os) {
    this.brand = brand;
    this.model = model;
    this.os = os;
  }

  #checkDeviceSerialNumber() {
    return this.#serialNumber.length > 3 && this.#serialNumber.includes("1");
  }

  checkDevice() {
    return this.#checkDeviceSerialNumber();
  }
}

const macbook = new Laptop("Apple", "Pro", "MacOS");
const dell = new Laptop("Dell", "x-model", "windows");
const asus = new Laptop("Asus", "y-model", "Linux");

console.log(macbook.checkDevice());

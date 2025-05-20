class MyPromise {
  #successCallbacks = [];
  #failCallbacks = [];
  #state = "pending";
  value;

  constructor(executor) {
    const resolve = (v) => {
      this.#state = "fulfilled";
      this.value = v;
      this.#successCallbacks.forEach((cb) => {
        cb(this.value);
      });
    };

    const reject = (v) => {
      this.#state = "rejected";
      this.value = v;
      this.#failCallbacks.forEach((cb) => {
        cb(this.value);
      });
    };

    executor(resolve, reject);
  }

  then(cb) {
    if (this.#state === "pending") {
      this.#successCallbacks.push(cb);
    }
    if (this.#state === "fulfilled") {
      cb(this.value);
    }
  }
}

const p1 = new MyPromise((resolve, reject) => {
  resolve(100);
});

p1.then(console.log);

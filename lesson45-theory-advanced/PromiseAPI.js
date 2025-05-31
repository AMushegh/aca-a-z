// Promise all
Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)), // 1
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)), // 3
]).then(console.log);

// Promise resolve

function createPromise(a) {
  if (a === 7) {
    return Promise.resolve(1);
  }

  return new Promise((res) => {
    // anhayt logika
  });
}

createPromise(7).then(console.log);

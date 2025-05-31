// my interval

let timeoutDuration = 1000;

function handler() {
  setTimeout(() => {
    console.log("1");
    handler();
  }, timeoutDuration);
}

// handler();

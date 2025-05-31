function myTimeout(cb, duration) {
  let intervalId = setInterval(() => {
    cb();
    clearInterval(intervalId);
  }, duration);
}

myTimeout(() => console.log(1), 2000);

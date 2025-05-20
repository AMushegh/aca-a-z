function getDataFromServer() {
  const randomDelay = Math.floor(Math.random() * (7000 - 500 + 1)) + 500;
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (randomDelay > 5000) {
        rej("TIMEOUT ERROR");
      } else {
        res(todos);
      }
    }, randomDelay);
  });
}

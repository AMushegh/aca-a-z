function oldPromise(onSuccessCallbacks, onFailCallbacks) {
  setTimeout(() => {
    onSuccess();
  }, 1000);
}

console.log(1);
oldPromise(() => {
  console.log("promise");
});
console.log(2);

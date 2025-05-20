function onSuccess(todo) {
  console.log(todo);
}

function onFail(error) {
  console.error(error, "es inch exav???");
}

getDataFromServer().then(onSuccess).catch(onFail);

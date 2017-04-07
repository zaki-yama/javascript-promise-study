function asyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Async Hello world');
    }, 16);
  });
}

asyncFunction().then((value) => {
  console.log(value);
}).catch((error) => {
  console.error(error);
});

function getURL(URL) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open('GET', URL, true);
    req.onload = () => {
      if (req.status === 200) {
        resolve(req.responseText);
      } else {
        reject(new Error(req.statusText));
      }
    };
    req.onerror = () => {
      reject(new Error(req.statusText));
    };
    req.send();
  });
}

const URL = 'http://httpbin.org/get';
getURL(URL)
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });

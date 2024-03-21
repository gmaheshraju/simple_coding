const firstPromise = new Promise((resolve, reject) => {
  resolve("1st promies success");
});

firstPromise
  .then((data) => {
    console.log("data", data);

    return data;
  })
  .catch((err) => {
    console.log("error", err);
  });

const secondPromise = new Promise((resolve, reject) => {
  resolve("2nd promies success");
});

secondPromise
  .then((data) => {
    console.log("data", data);

    return data;
  })
  .catch((err) => {
    console.log("error", err);
  });

const thirdPromise = new Promise((resolve, reject) => {
  resolve("3rd promies success");
});

thirdPromise
  .then((data) => {
    console.log("data", data);

    return data;
  })
  .catch((err) => {
    console.log("error", err);
  });

firstPromise
  .then((res) => {
    return secondPromise;
  })
  .then((res) => {
    return thirdPromise;
  })
  .catch((err) => {
    console.log("error", err);
  });

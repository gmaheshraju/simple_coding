const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello world");
  }, 5000);
});
console.log(promise);

//this will be called after 5 seconds when promise is fullfilled
promise
  .then((val) => {
    console.log(val + " abc");
  })
  .finally(() => {
    console.log("task done");
  });
// another way to print after sometime
setTimeout(() => {
  console.log(promise);
}, 6000);

const funcresolve = function myOwnResolve() {
  console.log("function resolved");
};

const funcReject = function myOwnReject() {
  console.log("function rejected");
};

const promiseTest = new Promise((funcresolve, funcReject) => {
  funcresolve("yo yo yo");
});

promiseTest.then((val) => {
  console.log("test test " + val);
});
console.log(promiseTest);

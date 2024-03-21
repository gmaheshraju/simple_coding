// - Pending - Initial state, neither fulfilled nor rejected

// - Fulfilled - Operation completed successfully

// - Rejected - Operation failed

console.log("Log 1");

const promise = new Promise((resolve) => {
  console.log("Log 2");

  resolve();
});

console.log("Log 3");

promise.then((result) => {
  console.log("Log 4");
});

console.log("Log 5");

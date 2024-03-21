// - Pending - Initial state, neither fulfilled nor rejected

// - Fulfilled - Operation completed successfully

// - Rejected - Operation failed

const city = "Bangloret";

const promise = new Promise((resolve, reject) => {
  if (city == "Banglore") {
    resolve("Welcome to Banglore");
  } else {
    reject("promise rejected");
  }
});

promise
  .then((data) => {
    console.log("data", data);

    return data;
  })
  .catch((err) => {
    console.log("error", err);
  });

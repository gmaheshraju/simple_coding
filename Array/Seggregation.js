const arr = [1.1, 1.2, 1.3, 2.2, 2.3, 2.4, 6.7, 6.8];
const segregate = arr.reduce((previousValue, currentValue) => {
  //round of the value
  const floored = Math.floor(currentValue);
  console.log("rounded value:", floored);
  if (!previousValue[floored]) {
    previousValue[floored] = [];
  }

  //segregate the current value in the respective key
  previousValue[floored].push(currentValue);
  return previousValue;
}, {});

console.log(segregate);

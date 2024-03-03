// arr.reduce(callbackfn,initialVal)
// Array.reduce((previousValue, currentValue, currentIndex, array) => {
//   const nextValue = previousValue + currentValue;
//   return nextValue;
// }, initialValue);

const arr = [1, 2, 3, 4];

const sum = arr.reduce((previousValue, currentValue) => {
  const nextValue = previousValue + currentValue;
  return nextValue;
}, 0);

console.log(sum);

const product = arr.reduce((previousValue, currentValue) => {
  const nextValue = previousValue * currentValue;
  return nextValue;
}, 1);

console.log(product);

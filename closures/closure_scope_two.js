function sum() {
  let a = 10;
  function add(b) {
    return a + b;
  }

  return add;
}

const func = sum();

let totalSum = func(20);

console.log(totalSum);

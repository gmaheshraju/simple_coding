function outer(a) {
  function inner1(b) {
    function inner2(c) {
      return a + b + c;
    }

    return inner2;
  }

  return inner1;
}

const outerfunc = outer(10);
const firstInner = outerfunc(20);
const secondInner = firstInner(30);

console.log(secondInner);

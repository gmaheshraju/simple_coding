const upperCase = (str) => {
  return str.upperCase();
};

const reverse = (str) => {
  return str.split("").reverse().join(" ");
};

const append = (str) => {
  return "Hello" + str;
};

const arr = [upperCase, reverse, append];

const initalValue = "curiousengineers.in";

const finalValue = arr.reduce((previousValue, currentValue) => {
  const newValue = append(previousValue);
  return newValue;
}, initalValue);

console.log(finalValue);

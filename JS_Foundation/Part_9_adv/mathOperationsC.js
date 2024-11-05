// named export

function add(a, b) {
  return a + b;
}

function subs(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a % b;
}

module.exports = {
  add,
  subs,
  multiply,
  divide,
};

//*********************** Commonjs Module Format ******************************
// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// module.exports = {
//   //addFn: add,
//   //subtractFn: subtract,
//   add,
//   subtract,
// };

//*************************** ES6 Fomart ***************************************
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

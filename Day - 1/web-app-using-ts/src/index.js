console.log("Hi!!!!!!!");

//********************* commonJS Format of importing ***************

//method 1
// var utilityModuleExports = require("./utility"); // returns {addFn:add , subtractFn:subtract}
// var addResult = utilityModuleExports.addFn(10, 20);
// var subResult = utilityModuleExports.subtractFn(10, 20);
// console.log(addResult, subResult);

//method 2
// var { add, subtract } = require("./utility"); // returns {add ,subtract}
// var addResult = add(10, 20);
// var subResult = subtract(10, 20);
// console.log(addResult, subResult);

//********************* ES6 Format of importing ***************
// import { add, subtract } from "./utility";
// var addResult = add(10, 20);
// var subResult = subtract(10, 20);
// console.log(addResult, subResult);

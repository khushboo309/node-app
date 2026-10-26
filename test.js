const assert = require("node:assert/strict");
const { getMessage } = require("./app");

assert.equal(
  getMessage(),
  "My first CI pipeline is working!"
);

console.log("All tests passed!");


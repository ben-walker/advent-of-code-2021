const fs = require("fs");

const readIntegerArray = (path = "") =>
  fs
    .readFileSync(path, "utf8")
    .split("\n")
    .filter((x) => !!x)
    .map((x) => parseInt(x));

module.exports = {
  readIntegerArray,
};

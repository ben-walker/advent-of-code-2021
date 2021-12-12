const fs = require("fs");

const readArray = (path = "", fn = (x) => x) =>
  fs
    .readFileSync(path, "utf8")
    .split("\n")
    .filter((x) => !!x)
    .map(fn);

module.exports = {
  readArray,
};

const path = require("path");

const { readArray } = require("../util/io");

const inputPath = path.join(__dirname, "input");

const input = readArray(inputPath, (x) => parseInt(x));

const output = input.filter((v, i) => v > input[i - 3]).length;

console.log(output);

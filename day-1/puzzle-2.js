const path = require("path");

const { readIntegerArray } = require("../util/io");

const inputPath = path.join(__dirname, "input");

const input = readIntegerArray(inputPath);

const output = input.filter((v, i) => v > input[i - 3]).length;

console.log(output);

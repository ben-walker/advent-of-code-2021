const fs = require("fs");
const path = require("path");

const { readIntegerArray } = require("../util/io");

const inputPath = path.join(__dirname, "input");

const input = readIntegerArray(inputPath);

const output = input.filter((v, i) => v > input[i - 1]).length;

console.log(output);

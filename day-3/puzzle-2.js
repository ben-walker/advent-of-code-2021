const path = require("path");

const { readArray } = require("../util/io");
const { findMostCommonBits } = require("./util");

const inputPath = path.join(__dirname, "input");

const input = readArray(inputPath);

const mostCommonBits = findMostCommonBits(input);
console.log(mostCommonBits);

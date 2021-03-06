const path = require("path");

const { readArray } = require("../util/io");
const { findMostCommonBits } = require("./util");

const inputPath = path.join(__dirname, "input");

const input = readArray(inputPath);

const mostCommonBits = findMostCommonBits(input);

const gamma = parseInt(mostCommonBits, 2);

const epsilon = parseInt(
  [...mostCommonBits].map((bit) => (bit === "1" ? "0" : "1")).join(""),
  2
);

const output = gamma * epsilon;

console.log(output);

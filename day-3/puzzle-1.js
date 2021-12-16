const path = require("path");

const { readArray } = require("../util/io");

const inputPath = path.join(__dirname, "input");

const input = readArray(inputPath);

const rateLength = input[0].length;

const rateTracker = Array.from({ length: rateLength }, () => 0);

input.forEach((number) => {
  [...number].forEach((bit, index) => {
    rateTracker[index] += bit === "1" ? 1 : -1;
  });
});

const gamma = parseInt(
  rateTracker.map((track) => (track > 0 ? 1 : 0)).join(""),
  2
);

const epsilon = parseInt(
  rateTracker.map((track) => (track > 0 ? 0 : 1)).join(""),
  2
);

const output = gamma * epsilon;

console.log(output);

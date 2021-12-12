const path = require("path");

const { readArray } = require("../util/io");
const { parseCommand } = require("./util");

const inputPath = path.join(__dirname, "input");

const input = readArray(inputPath, parseCommand);

const position = { horizontal: 0, depth: 0, aim: 0 };

input.forEach(([direction, mod]) => {
  if (direction === "forward") {
    position.horizontal += mod;
    position.depth += position.aim * mod;
  }
  if (direction === "down") position.aim += mod;
  if (direction === "up") position.aim -= mod;
});

const output = position.depth * position.horizontal;

console.log(output);

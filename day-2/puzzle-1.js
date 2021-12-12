const path = require("path");

const { readArray } = require("../util/io");

const inputPath = path.join(__dirname, "input");

const input = readArray(inputPath);

const position = { horizontal: 0, depth: 0 };

const parseCommand = (command = "") => {
  const pair = command.split(" ");

  return [pair[0], parseInt(pair[1])];
};

input.forEach((command) => {
  const [direction, mod] = parseCommand(command);

  if (direction === "forward") position.horizontal += mod;
  if (direction === "down") position.depth += mod;
  if (direction === "up") position.depth -= mod;
});

const output = position.depth * position.horizontal;

console.log(output);

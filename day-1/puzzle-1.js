import fs from "fs";

const inputUrl = new URL("input", import.meta.url);

const input = fs
  .readFileSync(inputUrl, "utf-8")
  .split("\n")
  .filter((x) => !!x)
  .map((x) => parseInt(x));

const output = input.filter((v, i) => v > input[i - 1]).length;

console.log(output);

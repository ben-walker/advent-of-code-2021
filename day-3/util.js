const findMostCommonBits = (numbers = []) => {
  const numberLength = numbers[0].length;
  const commonalityTracker = Array.from({ length: numberLength }, () => 0);

  numbers.forEach((number) => {
    [...number.toString()].forEach((bit, index) => {
      commonalityTracker[index] += bit === "1" ? 1 : -1;
    });
  });

  return commonalityTracker.map((track) => (track > 0 ? 1 : 0)).join("");
};

module.exports = {
  findMostCommonBits,
};

const parseCommand = (command = "") => {
  const pair = command.split(" ");

  return [pair[0], parseInt(pair[1])];
};

module.exports = {
  parseCommand,
};

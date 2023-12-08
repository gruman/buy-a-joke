const lines = require('../constants/lines')

function getRandomInt(min, max) {
  // Ensure that the input values are integers
  min = Math.ceil(min);
  max = Math.floor(max);

  // Generate a random integer within the specified range
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.getLines = (req, res, next) => {
  const randomLine = lines[getRandomInt(0, lines.length)];
  res.render('index', { line: randomLine });
};
exports.getLinesAgain = (req, res, next) => {
  res.send(lines[getRandomInt(0, lines.length)]);
  
}
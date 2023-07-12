const { catchedAsync } = require("../utils");

module.exports = {
  getCharacters: catchedAsync(require("./getCharacters")),
  createCharacter: catchedAsync(require("./createCharacter")),
  findCharacter: catchedAsync(require("./findCharacter")),
};

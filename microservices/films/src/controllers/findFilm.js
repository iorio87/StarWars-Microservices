const { response } = require("../utils");
const Film = require("../data");

module.exports = async (req, res) => {
  const { id } = req.params;
  const film = await Film.find(id);
  response(res, 200, film);
};
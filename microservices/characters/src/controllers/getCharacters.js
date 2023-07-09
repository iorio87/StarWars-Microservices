const { response } = require("../utils");
const axios = require("axios");

module.exports = async (req, res) => {
  const { id } = req.params;
  let characters;
  if (id) {
    characters = await axios.get(`http://database:8004/Character/${id}`);
  } else {
    characters = await axios.get("http://database:8004/Character");
  }
  response(res, characters.status, characters.data);
};

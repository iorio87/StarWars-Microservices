const axios = require("axios");

module.exports = {
  list: async () => {
    result = await axios.get("http://database:8004/Character");
    return result.data;
  },

  find: async (id) => {
    result = await axios.get(`http://database:8004/Character/${id}`);
    return result.data;
  },

  create: async (character) => {
    result = await axios.post("http://database:8004/Character", character);
    return result.data;
  },
};

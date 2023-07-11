const axios = require("axios");

module.exports = {
  list: async () => {
    result = await axios.get("http://database:8004/Planet");
    return result.data;
  },

  find: async (id) => {
    result = await axios.get(`http://database:8004/Planet/${id}`);
    return result.data;
  },

  create: async (planet) => {
    result = await axios.post("http://database:8004/Planet", planet);
    return result.data;
  },
};

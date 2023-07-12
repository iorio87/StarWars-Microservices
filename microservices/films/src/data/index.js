const axios = require("axios");

module.exports = {
  list: async () => {
    result = await axios.get("http://database:8004/Film");
    return result.data;
  },

  find: async (id) => {
    result = await axios.get(`http://database:8004/Film/${id}`);
    return result.data;
  },

  create: async (film) => {
    result = await axios.post("http://database:8004/Film", film);
    return result.data;
  },
};

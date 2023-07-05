const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/envs.js");

const conn = mongoose.createConnection(MONGO_URI);

// const Character = conn.model("Character", require("./schemas/characterSchema"));
// const Film = conn.model("Film", require("./schemas/filmSchema.js"));
// const Planet = conn.model("Planet", require("./schemas/planetSchema.js"));

// Character.find()
//   .populate("films", { title: 1, _id: 0 })
//   .populate("homeworld", { name: 1, _id: 0 })
//   .then((res) => console.log(res[0]));

module.exports = {
  Character: conn.model("Character", require("./schemas/characterSchema")),
  Film: conn.model("Film", require("./schemas/filmSchema.js")),
  Planet: conn.model("Planet", require("./schemas/planetSchema.js")),
};

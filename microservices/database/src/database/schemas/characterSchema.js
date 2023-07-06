const { Schema } = require("mongoose");

const characterSchema = new Schema({
  _id: String,
  name: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String,
  homeworld: { type: String, ref: "Planet" },
  films: [{ type: String, ref: "Film" }],
});

characterSchema.statics.list = async function () {
  return await this.find()
    .populate("films", { title: 1, _id: 0 })
    .populate("homeworld", { name: 1, _id: 0 });
};

characterSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("films", { title: 1, _id: 0 })
    .populate("homeworld", { name: 1, _id: 0 });
};

characterSchema.statics.insert = async function(character) {
  return await this.create(character)
}

module.exports = characterSchema;

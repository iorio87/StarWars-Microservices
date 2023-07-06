const { Schema } = require("mongoose");

const filmSchema = new Schema({
  _id: String,
  title: String,
  opening_crawl: String,
  director: String,
  producer: String,
  release_date: String,
  characters: [{ type: String, ref: "Character" }],
  planets: [{ type: String, ref: "Planet" }],
});

filmSchema.statics.list = async function () {
  return await this.find()
    .populate("characters", { name: 1, _id: 0 })
    .populate("planets", { name: 1, _id: 0 });
};

filmSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("characters", { name: 1, _id: 0 })
    .populate("planets", { name: 1, _id: 0 });
};

filmSchema.statics.insert = async function (film) {
  return await this.create(film);
};

module.exports = filmSchema;

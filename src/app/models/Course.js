const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, maxLength: 25 },
    description: { type: String, maxLength: 600 },
    img: { type: String, maxLength: 255 },
    videoID: { type: String },
    Lyric: { type: String },
    slug: { type: String, slug: "name" },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Course", Course);

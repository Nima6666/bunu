const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: mongoose.Types.ObjectId, ref: "Genre" },
  author: { type: mongoose.Types.ObjectId, ref: "Author" },
  quantity: { type: Number, default: 0 },
});

module.exports = mongoose.model("Book", bookSchema);

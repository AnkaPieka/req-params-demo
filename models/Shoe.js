const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shoeSchema = new Schema({
  name: String,
  color: String,
  price: Number,
});

const ShoeModel = mongoose.model("Shoe", shoeSchema);

module.exports = ShoeModel;

const mongoose = require('mongoose');
const { Schema } = mongoose;

const cardSchema = new Schema({
  name: String,
  type: String,
  description: String,
  image: String,
  rules: [Object],
  cost: Number,
  power: Number,
  toughness: Number,
});

mongoose.model('cards', cardSchema);

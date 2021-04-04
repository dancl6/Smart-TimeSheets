const mongoose = require('mongoose');

const { Schema } = mongoose;
// const Groups = require('./Groups');

const categorySchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;

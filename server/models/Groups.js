const mongoose = require('mongoose');

const { Schema } = mongoose;
const Users = require('./Users');
const Category = require('./Category');

const groupsSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  users: [Users.schema],
  category: [Category.schema]
});

const Groups = mongoose.model('Groups', groupsSchema);

module.exports = Groups;

const mongoose = require('mongoose');

const { Schema } = mongoose;
const Days = require('./Days');

const usersSchema = new Schema({
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
  day: [Days.schema]
});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;

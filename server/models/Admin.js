const mongoose = require('mongoose');

const { Schema } = mongoose;
const Groups = require('./Groups');

const adminSchema = new Schema({
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
  groups: [Groups.schema]
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;

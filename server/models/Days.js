const mongoose = require('mongoose');

const { Schema } = mongoose;
// const Days = require('./Days');

const daysSchema = new Schema({
  date: {
    type: String,
    required: true,
    trim: true
  },
  day_Name: {
    type: String,
    required: true
  },
  time_Slot: {
    type: Number,
    required: true
  },
  category: [Category.schema],
  // groups: [Groups.schema]
});

const Days = mongoose.model('Days', daysSchema);

module.exports = Days;

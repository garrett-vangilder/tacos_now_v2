const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const pointSchema = new Schema({
  type: { type: String, default: 'Point' },
  coordinates: { type: [Number], index: '2dsphere' },
});

const leadSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, 'Invalid Email Address'],
    required: 'Please supply an email address',
  },
  geometry: pointSchema,
});


const Lead = mongoose.model('lead', leadSchema);

module.exports = Lead;

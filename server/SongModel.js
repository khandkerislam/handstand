const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// The document schema should have 3 things
// A "firstName" that is a string
// A "lastName" that is a string
// An "age" that is a number
// All of these should be required.
// Create your schema here

// You must export your model through module.exports
// The collection name should be 'student'

const songSchema = new Schema(
  {
    song: {type: Array, required: true},
    name: {type: String, required: true}
  }
);

const Song = mongoose.model('song', songSchema);
module.exports = Song;

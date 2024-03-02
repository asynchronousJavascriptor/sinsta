const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  caption: String,
  date: {
    type: Date,
    default: Date.now
  },
  image: String,
  likes: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
  ],
  comments: {
    type: Array,
    default: []
  }
})

module.exports = mongoose.model('post', postSchema);

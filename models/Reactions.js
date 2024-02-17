const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
  thoughtId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Thought',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = reactionSchema;

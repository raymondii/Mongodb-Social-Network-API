// Import 'model' and 'Schema' from mongoose
const { model, Schema } = require('mongoose');

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

const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;

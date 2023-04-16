import mongoose from 'mongoose';

const GameSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  wpm: { type: Number, require: true },
  accuracy: { type: Number, require: true },
  chars: [{ type: Number, require: true }],
  mode: { type: String, require: true },
  date: { type: Date, default: Date.now, require: true },
  time: { type: Number, require: true },
});

module.exports = mongoose.model('Game', GameSchema);

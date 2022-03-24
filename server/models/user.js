const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  blogs: {
    type: [Schema.Types.ObjectId],
    ref: 'Blog',
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
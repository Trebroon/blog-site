const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  blogs: {
    type: [Schema.Types.ObjectId],
    ref: 'Blog',
  }, 
});

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

const User = mongoose.model('User', UserSchema);

module.exports = User;
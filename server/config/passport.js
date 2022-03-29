const LocalStrategy = require('passport-local').Strategy;
const JwTStrategy = require('passport-jwt').Strategy;
const bcrypt = require('bcryptjs');

const User = require('../models/user');

const cookieExtractor = req => {
  let token = null;
  if(req && req.cookies) {
    token = req.cookies['access_token'];
  }
  return token;
}

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match User
      User.findOne({ email: email }, (err, user) => {
        if(err) return done(err);
        if(!user) return done(null, false, { msg: 'Incorrect email or password'});
        // Match password
        bcrypt.compare(password, user.password, function(err, isMatch) {
          if(err) throw err;
          if(isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { msg: 'Incorrect email or password'});
          }
        });
      })
    })
  );

  passport.use(
    new JwTStrategy({
      jwtFromRequest: cookieExtractor,
      secretOrKey: process.env.JWT_SECRET
    }, (payload, done) => {
      User.findById({ _id: payload.sub }, (err, user) => {
        if(err) return done(err, false);
        if(user) return done(null, user);
        return done(null, false);
      })
    })
  )
};
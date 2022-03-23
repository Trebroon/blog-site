const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

const User = require('../models/user');

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match User
      User.findOne({ email: email })
        .then(user => {
          if(!user) {
            return done(null, false, { msg: 'Incorrect Email or Password'});
          }
          // Match password
          bcrypt.compare(password, user.password, (error, isMatch) => {
            if(err) throw err;

            if(isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { msg: 'Incorrect Email or Password'});
            }
          });

        })
        .catch(error => console.log(error))
    })
  );
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
}
/**
 * User.js
 *
 * @description :: Broker agents with access to the system.
 * @docs        :: https://github.com/elwebmaster/realestate/wiki/Agent-(User)
 */

module.exports = {

  attributes: {
    username: {
      type: 'string',
      unique: true,
      required: true
    },
    email: {
      type: 'string',
      unique: true,
      required: true
    },
    phone: {
      type: 'string',
    },    
    password: {
      type: 'string',
      required: true,
      minLength: 6
    }
  },

  beforeCreate: function(attrs, next) {
    var bcrypt = require('bcrypt');

    bcrypt.genSalt(10, function(err, salt) {
      if (err) return next(err);

      bcrypt.hash(attrs.password, salt, function(err, hash) {
        if (err) return next(err);

        attrs.password = hash;
        next();
      });
    });
  }
};

var passport = require('passport'),
    User = require('./models/user'),
    db = mongoose.connection;

//setup & init server
function init() {
  db.on('error', console.error);
  db.once('open', function() {
});

  console.log('Connect to DB');
  mongoose.connect('mongodb://localhost/MNSUsers');
}

function addUser(_username,_password,_userPic) {
    console.log('Attempting to add user');
    var user = new User({
      username: _username,
      password: _password,
      userPic: _userPic
    });

    user.save(function(err, user) {
      if (err) return console.error(err);
      console.dir(user);
    });
}

function getUser(_username) {
  console.log('Attempting to find user');
  User.findOne({username: _username}, function(err, user) {
    if (err) return console.error(err);
    console.log(user.password);
    return user.password;
  });
}

module.exports = {
  init: init,
  addUser: addUser,
  getUser: getUser
}

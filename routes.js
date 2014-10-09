var passport = require('passport'),
    User = require('./lib/models/user');

module.exports = function(app) {
  //HOME
  app.get('/', function(req, res) {
    res.render('index', {user:req.user});
  });

  //LOGIN
  app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
  }));

  //LOGOUT
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  //REGISTER
  app.post('/register', function(req, res) {
    var userPicStr = (req.files.profilePicture.name === null) ? '/imgs/users/nopic.png' : '/userphotos/'+req.files.profilePicture.name;
    User.register(new User({username:req.body.username,userPic:userPicStr}), req.body.password, function(err, account) {
      console.log(err);
      if(err) {
        return res.render('/', {user:user});
      }

      res.redirect('/');
    });
  });
};

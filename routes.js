var passport = require('passport'),
    User = require('./lib/models/user');

module.exports = function(app) {
  //HOME
  app.get('/', function(req, res) {
    res.render('index', {user:req.user});
  });

  //LOGIN
  app.get('/login', function(req, res) {
    res.render('login', {user: req.user});
  });
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
  app.get('/register', function(req, res) {
    res.render('register', { });
  });
  app.post('/register', function(req, res) {
    User.register(new User({username:req.body.username}), req.body.password, function(err, account) {
      console.log(err);
      if(err) {
        return res.render('register', {user:user});
      }

      res.redirect('/');
    });
  });
};

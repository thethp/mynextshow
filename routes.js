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
      res.redirect('/');
    });
  });
  
  //USER
  app.get('/:username', function(req, res) {
    var query = User.where({username:req.params.username});
    query.findOne(function (err, userprofile) {
      if(userprofile === null)
      {
        res.render('index', {user:req.user,error:'User does not exist :('});
      } else {
        var isActiveUser = (req.user !== undefined && req.user._id.toString() === userprofile._id.toString()) ? true : false;
        console.log(isActiveUser, req.user !== undefined, req.user._id.toString() === userprofile._id.toString());
        res.render('userprofile', {user:req.user,userprofile:userprofile,activeUser:isActiveUser});
      }
    }); 
  });
};

var passport = require('passport'),
    User = require('./lib/models/user');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index', {user:req.user});
  });
}

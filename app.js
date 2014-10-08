var express = require('express'),
    http = require('http'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('./lib/models/user');
var app = express();

//Jade setup
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', {layout: false });

//Express setup
app.use(bodyParser());
app.use(cookieParser('Cheeseburger Backpack!'));
app.use(session());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname+'/public'));

//Passport setup
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//Rikki Tikki Tavi [Mongoose]
mongoose.connect('mongodb://localhost/MNSUsers');

//route it start it kick it jump it
require('./routes')(app);
app.listen(80);
console.log('severe servers started surreptitiously');

var mongoose = require('mongoose'),
    passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
  shows: [{name:String, date:String, time:String, venue:String, url:String}],
  userPic: {type:String, default:'/img/nopic.png'},
  theme: {type:String, default:'basic'}
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);

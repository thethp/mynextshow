var gulp = require('gulp'),
    less = require('gulp-less'),
    lint = require('gulp-jslint'),
    minifyCSS = require('gulp-minify-css'),
    path = require('path');

gulp.task('less', function() {
  gulp.src(['./styles/main.less'])
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('lint', function() {
  gulp.src(['./app.js','./routes.js','./lib/*.js'])
    .pipe(lint({
      reporter: function (e) {
        var lintResult = (e.pass) ? '[*PASS*]' : '[**FAIL**]';
        lintResult += ' ' + e.file;
        console.log(lintResult);
      }
    }));
});

gulp.task('default', ['less',
 'lint'
]);

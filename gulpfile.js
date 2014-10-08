var gulp = require('gulp'),
    less = require('gulp-less'),
    hint = require('gulp-jshint'),
    minifyCSS = require('gulp-minify-css'),
    path = require('path');

gulp.task('default', ['less', 'lint']);

gulp.task('less', function() {
  gulp.src(['./styles/main.less'])
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('lint', function() {
  gulp.src(['./app.js','./routes.js','./lib/*.js','./lib/models/*.js'])
    .pipe(hint())
    .pipe(hint.reporter('default'));
});

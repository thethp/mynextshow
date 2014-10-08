var gulp = require('gulp'),
    comb = require('gulp-csscomb'),
    less = require('gulp-less'),
    hint = require('gulp-jshint'),
    minifyCSS = require('gulp-minify-css'),
    path = require('path');

gulp.task('default', ['comb','less', 'lint']);

gulp.task('comb', function() {
  return gulp.src('./styles/*.less')
    .pipe(comb())
    .pipe(gulp.dest('./styles/'));
});

gulp.task('less', function() {
  return gulp.src('./styles/main.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('lint', function() {
  return gulp.src(['./app.js','./routes.js','./lib/*.js','./lib/models/*.js'])
    .pipe(hint())
    .pipe(hint.reporter('default'));
});

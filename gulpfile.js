'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('sass', function () {
  return gulp.src(['./sass/\**/\*.scss', './sass/\**/\*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch(['./sass/\**/\*.scss'], ['sass']);
});

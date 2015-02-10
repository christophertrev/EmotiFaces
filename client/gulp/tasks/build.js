var gulp = require('gulp');
var react = require('gulp-react');

module.exports = function () {
  return gulp.src('src/*')
    .pipe(react())
    .pipe(gulp.dest('lib'));
}
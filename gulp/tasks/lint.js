var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var paths = require('../paths');

module.exports = function() {
  return gulp.src(paths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
}
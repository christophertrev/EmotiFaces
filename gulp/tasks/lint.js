var gulp   = require('gulp');
var jshint = require('gulp-jshint');

var paths = {
  scripts: [
  './server/**/*.js',
  './gulpfile.js',
  './client/**/*.js'
  ],
  server : {
    js: ['./server/*.js'],
    specs: ['.server/test/*.js']
  }
};

module.exports = function() {
  return gulp.src(paths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
}
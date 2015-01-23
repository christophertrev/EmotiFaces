var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

var paths = {
  scripts: [
  './server/*.js',
  './gulpfile.js'
  ],
  server : {
    js: ['./server/*.js'],
    specs: ['.server/test/*.js']
  }
};


gulp.task('lint', function() {
  return gulp.src(paths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});
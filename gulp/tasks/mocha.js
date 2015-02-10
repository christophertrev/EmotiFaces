var gulp   = require('gulp');
var mocha = require('gulp-mocha');
var paths = require('../paths');


module.exports = function () {
  return gulp.src(paths.server.specs, {read: false})
    .pipe(mocha({
      reporter: 'nyan',
      globals: {
        should: require('should')
      }
    }));
};
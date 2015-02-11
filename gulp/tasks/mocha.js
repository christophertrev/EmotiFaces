var gulp   = require('gulp');
var istanbul = require('gulp-istanbul');
var mocha = require('gulp-mocha');
var paths = require('../paths');


module.exportssss = function () {
  return gulp.src(paths.server.specs, {read: false})
    .pipe(mocha({
      reporter: 'nyan',
      globals: {
        should: require('should')
      }
    }));
};


module.exports = function (cb) {
  console.log(paths.server.js)
  gulp.src(paths.server.js)
    .pipe(istanbul()) // Covering files
    // .pipe(istanbul.hookRequire()) // Force `require` to return covered files
    .on('finish', function () {
      gulp.src(paths.server.specs)
        .pipe(mocha({
          reporter: 'nyan',
          globals: {
            should: require('should')
          }
        }))
        .pipe(istanbul.writeReports()) // Creating the reports after tests runned
        .on('end', cb);
    });
};
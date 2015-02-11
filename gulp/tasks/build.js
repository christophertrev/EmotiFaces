var gutil = require('gulp-util')
var watchify = require('watchify');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var gulp = require('gulp');
var paths = require('../paths');



var bundler = watchify(browserify(paths.client.src + '/index.js', watchify.args));
// add any other browserify options or transforms here
bundler.transform(reactify);

// gulp.task('js', bundle); // so you can run `gulp js` to build the file
bundler.on('update', bundle); // on any dep update, runs the bundler

function bundle() {
  return bundler.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(paths.client.lib));
}

module.exports = bundle
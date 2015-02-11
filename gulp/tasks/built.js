var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var paths = require('../paths');
var reactify = require('reactify');

 
// gulp.task('browserify', function() {
//     return browserify('./src/javascript/app.js')
//         .bundle()
//         //Pass desired output filename to vinyl-source-stream
//         .pipe(source('bundle.js'))
//         // Start piping stream to tasks!
//         .pipe(gulp.dest('./build/'));
// });


module.exports = function() {
  return browserify(paths.client.src + '/index.js')
    .transform(reactify)
    .bundle()
    //Pass desired output filename to vinyl-source-stream
   .pipe(source('bundle.js'))
    // Start piping stream to tasks!
    .pipe(gulp.dest(paths.client.lib));
}
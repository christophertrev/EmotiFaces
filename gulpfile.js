var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var nodemon = require('gulp-nodemon');
var mocha = require('gulp-mocha');

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

gulp.task('mon',function (){
  nodemon({ 
    script:'server/server.js',
    ext: 'js'
  })
  .on('change', ['lint'])
  .on('restart', function (){
    console.log('restarting baby');
  });
});

gulp.task('test', function () {
    return gulp.src(paths.server.specs, {read: false})
        .pipe(mocha({reporter: 'nyan'}));
});
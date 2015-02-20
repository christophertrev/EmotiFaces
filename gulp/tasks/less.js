var less = require('gulp-less');
var path = require('path');
var paths = require('../paths').less;
var gulp = require('gulp');


// less: {
//   src: client + '/styles/main.less',
//   watch: [
//     client + '/styles/**',
//     mui + '/styles/**'
//   ],
// dest: 'client/lib'
// },

// gulp.task('less', function () {
//   return gulp.src(paths.src)
//     .pipe(less())
//     .pipe(gulp.dest(paths.dest))
// });

module.exports  =  function () {
  return gulp.src(paths.src)
    .pipe(less())
    .pipe(gulp.dest(paths.dest))
}
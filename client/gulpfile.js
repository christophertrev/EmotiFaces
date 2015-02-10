var gulp = require('./gulp')([
  'build',
  'js',
  'lint'
]);

gulp.task('watch', function (){
  gulp.watch('src/*', ['build']);
});

gulp.task('default', ['build']);
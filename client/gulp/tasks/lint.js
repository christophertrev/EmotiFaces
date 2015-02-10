var gulp = require('gulp');
var jslint = require('gulp-jslint');
 
// build the main source into the min file 
var linter = function () {
    return gulp.src(['src/index.js'])
        .pipe(jslint())
        .on('error', function (error) {
            console.error(String(error));
        });
};


module.exports = linter;
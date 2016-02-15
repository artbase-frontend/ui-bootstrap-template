var concat = require('gulp-concat');
var gulp = require('gulp');
var notify = require('gulp-notify');
var opn = require('opn');
var runSequence = require('run-sequence');
var webserver = require('gulp-webserver');


gulp.task('default', function () {
    runSequence(['web-server', 'watch', 'open-browser']);
});

gulp.task('watch', function () {
    // Watch .js files
    // gulp.watch('app/src/**/*.js', []);

    // Watch .html files
    gulp.watch('app/src/**/*.html', ['templates']);
});

gulp.task('web-server', function () {
    gulp.src('./app')
        .pipe(webserver({
            host: 'localhost',
            port: '8000',
            livereload: true,
            directoryListing: false
        }));
});

gulp.task('open-browser', function () {
    opn('http://localhost:8000');
});
var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('server', function () {
    connect.server({
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('./app/*.html').pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./app/components/**/*'], ['html']);
});

gulp.task('default', ['server', 'watch']);
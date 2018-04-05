'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


gulp.task('sass', function () {
	return gulp.src('./sass/**/*.scss')
		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(gulp.dest('./css'));
});

gulp.task('sass', function () {
    return gulp.src('./sass/style.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./css'));
});

gulp.task('default', function () {
    browserSync.init({
        port: 1234,
        //  https: true,
        ghostMode: false,
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./js/**/*.js').on("change", browserSync.reload);
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./css/**/*.css').on("change", browserSync.reload);
    gulp.watch('**/*.html').on("change", browserSync.reload);
});

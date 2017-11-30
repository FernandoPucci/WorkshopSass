'use strict';


var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch');

//SCSS Compiler
gulp.task('scssCompiler', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
    gulp.watch('./scss/*.scss', ['scssCompiler']);

});
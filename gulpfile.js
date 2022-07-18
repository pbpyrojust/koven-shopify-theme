'use strict';
// Set the required modules
var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var concat = require('gulp-concat');

// Set the sass compiler
sass.compiler = require('node-sass');

// Gulp sass task to look for .scss files and compile to .css
gulp.task('sass', function () {
   return gulp.src('/sass/**/*.scss')
   .pipe(concat('justin.scss'))
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('/assets/'));
});

// Gulp sass:watch task to always compile .scss to .css on save
gulp.task('sass:watch', function () {
    gulp.watch('/sass/**/*.scss', ['sass']);
 });
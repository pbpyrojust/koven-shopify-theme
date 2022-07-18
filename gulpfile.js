'use strict';

// Set the required modules
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Gulp sass task to look for .scss files and compile to .css
function buildStyles() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets'));
};

// Gulp sass:watch task to always compile .scss to .css on save
function buildStyles() {
    return gulp.src('./sass/**/*.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('./assets'));
  };
  
exports.buildStyles = buildStyles;
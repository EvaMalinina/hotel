'use strict';

const postcss = require('gulp-postcss');
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

sass.compiler = require('node-sass');

gulp.task('sass', function() {
  const plugins = [
    autoprefixer({overrideBrowserslist: ['last 2 version'], cascade: false}),
    cssnano()
  ];
  return gulp.src('./src/sass/**/*.scss', { sourcemaps: true })
    .pipe(concat('main.css'))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./build/css', { sourcemaps: true }));
});

gulp.task('script', function () {
  return gulp.src('./src/scripts/**/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify({
      toplevel: true
    }))
    .pipe(gulp.dest('./build/scripts'))
});
 
gulp.task('watch', function () {
  gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
  gulp.watch('./src/scripts/**/*.js', gulp.series('script'));
});

// exports.watch = watch;
'use strict';

const postcss = require('gulp-postcss');
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

const uglify = require('gulp-uglify');

const spritesmith = require('gulp.spritesmith');
const buffer = require('vinyl-buffer');
const imagemin = require('gulp-imagemin');
const cleanCSS = require('gulp-clean-css');
const merge = require('merge-stream');

gulp.task('sprite', function () {
  const spriteData = gulp.src('./src/icons/*').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css',
    padding: 20
  }));
 
  const imgStream = spriteData.img
    .pipe(buffer())
    .pipe(imagemin())
    .pipe(gulp.dest('./build/sprite'));
 
  const cssStream = spriteData.css
    .pipe(cleanCSS({compatibility: 'ie11', format: 'beautify'}))
    .pipe(gulp.dest('./build/sprite'));
 
  return merge(imgStream, cssStream);
});

sass.compiler = require('node-sass');

gulp.task('sass', function() {
  const plugin = [
    autoprefixer({overrideBrowserslist: ['last 2 version'], cascade: false})
  ];
  return gulp.src('./src/sass/**/*.scss', { sourcemaps: true })
    .pipe(concat('main.css'))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(cleanCSS({compatibility: 'ie11', format: 'beautify'}))
    .pipe(postcss(plugin))
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
  gulp.watch('./src/icons/**/*.svg', gulp.series('sprite'));
  gulp.watch('./src/scripts/**/*.js', gulp.series('script'));
});

// exports.watch = watch;
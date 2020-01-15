'use strict';

const postcss = require('gulp-postcss');
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

const spritesmith = require('gulp.spritesmith');
const buffer = require('vinyl-buffer');
const imagemin = require('gulp-imagemin');
const merge = require('merge-stream');

const minify = require("gulp-babel-minify");

sass.compiler = require('node-sass');

gulp.task('sass', function() {
  const plugin = [
    autoprefixer({overrideBrowserslist: ['last 2 version'], cascade: false})
  ];
  return gulp.src('./src/sass/main.scss', { sourcemaps: true })
    .pipe(concat('main.css'))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(cleanCSS({compatibility: 'ie11', format: 'beautify'}))
    .pipe(postcss(plugin))
    .pipe(gulp.dest('./build/css', { sourcemaps: true }));
});

gulp.task('sprite-icon', function () {
  const spriteData = gulp.src('./src/icons/*').pipe(spritesmith({
    imgName: 'sprite-icon.png',
    cssName: 'sprite-icon.css',
    padding: 20,
    algorithm: 'top-down'
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

gulp.task('sprite-img', function () {
  const spriteData2 = gulp.src('./src/images/*').pipe(spritesmith({
    imgName: 'sprite-img.jpg',
    cssName: 'sprite-img.css',
    padding: 20,
    algorithm: 'top-down'
  }));
 
  const imgStream2 = spriteData2.img
    // .pipe(buffer())
    // .pipe(imagemin())
    .pipe(gulp.dest('./build/sprite'));
 
  const cssStream2 = spriteData2.css
    .pipe(cleanCSS({compatibility: 'ie11', format: 'beautify'}))
    .pipe(gulp.dest('./build/sprite'));
 
  return merge(imgStream2, cssStream2);
});

gulp.task('script', function () {
  gulp.src('./src/scripts/**/*.js')
    .pipe(concat('main.js'))
    .pipe(minify({
      mangle: {
        keepClassName: true
      }
    }))
    .pipe(gulp.dest('./build/scripts')) 
});
 
gulp.task('watch', function () {
  gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
  gulp.watch('./src/icons/**/*.png', gulp.series('sprite-icon'));
  gulp.watch('./src/images/**/*.jpg', gulp.series('sprite-img'));
  gulp.watch('./src/scripts/**/*.js', gulp.series('script'));
});

// exports.watch = watch;
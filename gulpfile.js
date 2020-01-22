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
  const spriteData2 = gulp.src('./src/images/general/*').pipe(spritesmith({
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
    .pipe(gulp.dest('./build/sprite/img'));
 
  return merge(imgStream2, cssStream2);
});

gulp.task('sprite-junior-room', function () {
  const spriteData2 = gulp.src('./src/images/junior-room/*').pipe(spritesmith({
    imgName: 'sprite-junior-room.jpg',
    cssName: 'sprite-junior-room.css',
    algorithm: 'left-right'
  }));
 
  const imgStream2 = spriteData2.img
    // .pipe(buffer())
    // .pipe(imagemin())
    .pipe(gulp.dest('./build/sprite/junior-room'));
 
  const cssStream2 = spriteData2.css
    .pipe(cleanCSS({compatibility: 'ie11', format: 'beautify'}))
    .pipe(gulp.dest('./build/sprite/junior-room'));
 
  return merge(imgStream2, cssStream2);
});

gulp.task('sprite-standart-room', function () {
  const spriteData2 = gulp.src('./src/images/standart-room/*').pipe(spritesmith({
    imgName: 'sprite-standart-room.jpg',
    cssName: 'sprite-standart-room.css',
    algorithm: 'left-right'
  }));
 
  const imgStream2 = spriteData2.img
    // .pipe(buffer())
    // .pipe(imagemin())
    .pipe(gulp.dest('./build/sprite/standart-room'));
 
  const cssStream2 = spriteData2.css
    .pipe(cleanCSS({compatibility: 'ie11', format: 'beautify'}))
    .pipe(gulp.dest('./build/sprite/standart-room'));
 
  return merge(imgStream2, cssStream2);
});

gulp.task('sprite-specious-room', function () {
  const spriteData2 = gulp.src('./src/images/specious-room/*').pipe(spritesmith({
    imgName: 'sprite-specious-room.jpg',
    cssName: 'sprite-specious-room.css',
    algorithm: 'left-right'
  }));
 
  const imgStream2 = spriteData2.img
    // .pipe(buffer())
    // .pipe(imagemin())
    .pipe(gulp.dest('./build/sprite/specious-room'));
 
  const cssStream2 = spriteData2.css
    .pipe(cleanCSS({compatibility: 'ie11', format: 'beautify'}))
    .pipe(gulp.dest('./build/sprite/specious-room'));
 
  return merge(imgStream2, cssStream2);
});

gulp.task('sprite-junior-suite', function () {
  const spriteData2 = gulp.src('./src/images/junior-suite/*').pipe(spritesmith({
    imgName: 'sprite-junior-suite.jpg',
    cssName: 'sprite-junior-suite.css',
    algorithm: 'left-right'
  }));
 
  const imgStream2 = spriteData2.img
    // .pipe(buffer())
    // .pipe(imagemin())
    .pipe(gulp.dest('./build/sprite/junior-suite'));
 
  const cssStream2 = spriteData2.css
    .pipe(cleanCSS({compatibility: 'ie11', format: 'beautify'}))
    .pipe(gulp.dest('./build/sprite/junior-suite'));
 
  return merge(imgStream2, cssStream2);
});

gulp.task('sprite-premier-suite', function () {
  const spriteData2 = gulp.src('./src/images/premier-suite/*').pipe(spritesmith({
    imgName: 'sprite-premier-suite.jpg',
    cssName: 'sprite-premier-suite.css',
    algorithm: 'left-right'
  }));
 
  const imgStream2 = spriteData2.img
    // .pipe(buffer())
    // .pipe(imagemin())
    .pipe(gulp.dest('./build/sprite/premier-suite'));
 
  const cssStream2 = spriteData2.css
    .pipe(cleanCSS({compatibility: 'ie11', format: 'beautify'}))
    .pipe(gulp.dest('./build/sprite/premier-suite'));
 
  return merge(imgStream2, cssStream2);
});

gulp.task('sprite-president-suite', function () {
  const spriteData2 = gulp.src('./src/images/president-suite/*').pipe(spritesmith({
    imgName: 'sprite-president-suite.jpg',
    cssName: 'sprite-president-suite.css',
    algorithm: 'left-right'
  }));
 
  const imgStream2 = spriteData2.img
    // .pipe(buffer())
    // .pipe(imagemin())
    .pipe(gulp.dest('./build/sprite/president-suite'));
 
  const cssStream2 = spriteData2.css
    .pipe(cleanCSS({compatibility: 'ie11', format: 'beautify'}))
    .pipe(gulp.dest('./build/sprite/president-suite'));
 
  return merge(imgStream2, cssStream2);
});

gulp.task('script', function () {
  return gulp.src('./src/scripts/**/*.js')
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
  gulp.watch('./src/images/general/**/*.jpg', gulp.series('sprite-img'));
  gulp.watch('./src/images/junior-room/**/*.jpg', gulp.series('sprite-junior-room'));
  gulp.watch('./src/images/standart-room/**/*.jpg', gulp.series('sprite-standart-room'));
  gulp.watch('./src/images/specious-room/**/*.jpg', gulp.series('sprite-specious-room'));
  gulp.watch('./src/images/junior-suite/**/*.jpg', gulp.series('sprite-junior-suite'));
  gulp.watch('./src/images/premier-suite/**/*.jpg', gulp.series('sprite-premier-suite'));
  gulp.watch('./src/images/president-suite/**/*.jpg', gulp.series('sprite-president-suite'));
  gulp.watch('./src/scripts/**/*.js', gulp.series('script'));
});

// exports.watch = watch;
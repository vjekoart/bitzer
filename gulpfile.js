var gulp = require('gulp'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    del = require('del');

var sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css');

var jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify');

var imagemin = require('gulp-imagemin');


/* Task: default */
gulp.task('default', function() {
    gulp.start('css', 'js', 'img', 'releases');
});


/* Task: css */
gulp.task('css', function () {
    return sass('src/scss/app.scss')
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest('public/css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('public/css'));
});


/* Task: js */
gulp.task('js', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('public/js'));
});


/* Task: img */
gulp.task('img', function() {
    return gulp.src('src/img/*')
        .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
        .pipe(gulp.dest('public/img'));
});

/* Task: releases */
gulp.task('releases', function() {
    return gulp.src('src/img/music/*')
        .pipe(imagemin({ optimizationLevel: 4, progressive: true, interlaced: true }))
        .pipe(gulp.dest('public/img/music'));
});


/* Task: clean */
gulp.task('clean', function(cb) {
   del(['public/js/*.js', 'public/css/app*.css', 'public/img/*'], cb);
});

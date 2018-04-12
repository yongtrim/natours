var gulp = require('gulp');

var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var gap = require('gulp-append-prepend');
var sass = require('gulp-sass');

gulp.task('styles', () => {
  return gulp.src('./app/assets/styles/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gap.prependFile('./node_modules/normalize.css/normalize.css'))
    .pipe(postcss([autoprefixer]))
    .pipe(gulp.dest('./temp'));
});


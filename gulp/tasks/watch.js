var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();


gulp.task('cssInject', ['styles'], () => {
  return gulp.src('./temp/assets/styles/styles.css')
    .pipe(browserSync.stream());
});

gulp.task('htmlInject', () => {
  return gulp.src('./app/index.html')
    .pipe(gulp.dest('./temp/'));
})


gulp.task('deleteTempFolder', () => {
  return del('./temp');
});


gulp.task('watch', () => {
  
  browserSync.init({
    notify: false,
    server: {
      baseDir: "temp"
    }
  });

  // gulp.start('deleteTempFolder');
  gulp.start('htmlInject');
  gulp.start('cssInject');
  gulp.start('imagesInject');

  watch('./app/index.html', () => {
    gulp.start('htmlInject');
  });

  watch('./app/assets/styles/**/*.scss', () => {
    gulp.start('cssInject');
  });
});

var gulp = require('gulp');


gulp.task('imagesInject', () => {
  return gulp.src('./app/assets/images/**')
    .pipe(gulp.dest('./temp/img'));
});

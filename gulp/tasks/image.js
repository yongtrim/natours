var gulp = require('gulp');


gulp.task('htmlImages', () => {
  return gulp.src('./app/assets/images/**')
    .pipe(gulp.dest('./temp/img'));
});

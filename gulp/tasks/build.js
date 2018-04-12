var gulp = require('gulp');
var del = require('del');

var distFolder = './docs';

gulp.task('deleteDistFolder', () => {
  return del(distFolder);
});

gulp.task('copyFiles', () => {
  var pathsToCopy = [
    './temp/**/*'
  ];

  return gulp.src(pathsToCopy)
    .pipe(gulp.dest(distFolder));
});


gulp.task('build', ['deleteDistFolder', 'copyFiles']);


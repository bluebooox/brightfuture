var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('src/sass/style.scss')
    .pipe(sass({
      includePaths: require('node-reset-scss').includePath
    }))
    .pipe(gulp.dest('css/'));
});


gulp.task('default', ['sass']);
const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

gulp.task('styles', () => {
  return gulp.src('sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./css/'));
});

gulp.task('clean', () => {
  return del([
    'css/main.css',
  ]);
});

gulp.task('watch', () => {
  gulp.watch('sass/**/*.sass', (done) => {
    gulp.series(['clean', 'styles'])(done);
  });
});

gulp.task('default', gulp.series(['clean', 'styles', 'watch']));

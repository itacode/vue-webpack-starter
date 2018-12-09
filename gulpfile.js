var gulp = require('gulp');
var cache = require('gulp-cached');
var progeny = require('gulp-progeny');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

var sassSource = './src/css/**/*.scss',
  cssDest = './src/css';

function style() {
  var stream = gulp.src(sassSource)
    .pipe(cache('style'))
    .pipe(progeny())
    .pipe(sass({
        outputStyle: 'expanded'
      })
      .on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest(cssDest));
  return stream;
}

gulp.task('style', style);

gulp.task('watch', function () {
  gulp.watch(sassSource, style).on('change', function (path) {
    console.log('Changed: ' + path);
  });
});

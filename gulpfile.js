var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

var sassSource = './src/css/**/*.scss',
  cssDest = './src/css';

function style() {
  var stream = gulp
    .src(sassSource, { since: gulp.lastRun(style) })
    .pipe(
      sass({
        outputStyle: 'expanded',
      }).on('error', sass.logError)
    )
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest(cssDest));
  return stream;
}

function watch(cb) {
  gulp.watch(sassSource, style).on('change', function(path) {
    console.log('Changed: ' + path);
  });
  cb();
}

module.exports.style = style;
module.exports.watch = watch;

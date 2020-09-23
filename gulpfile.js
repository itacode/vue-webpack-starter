const gulp = require('gulp');
const sass = require('gulp-dart-sass');
const postcss = require('gulp-postcss');
const browserSync = require('browser-sync');

const paths = {
  sassSource: './src/css/**/*.scss',
  cssDest: './src/css',
  htmlSource: './src/index.html',
};

const server = browserSync.create();

function style() {
  const stream = gulp
    .src(paths.sassSource, { since: gulp.lastRun(style) })
    .pipe(
      sass({
        outputStyle: 'expanded',
      }).on('error', sass.logError)
    )
    .pipe(postcss())
    .pipe(gulp.dest(paths.cssDest))
    .pipe(server.stream());
  return stream;
}

function reload(cb) {
  server.reload();
  cb();
}

function serve(cb) {
  server.init({
    server: {
      baseDir: './src',
    },
  });
  cb();
}

function watch(cb) {
  gulp.watch(paths.sassSource, style).on('change', function (path) {
    console.log('Changed: ' + path);
  });
  cb();
}

function watchForServer(cb) {
  gulp.watch(paths.htmlSource, reload);
  cb();
}

const dev = gulp.series(watch, serve, watchForServer);

// Compile scss files
module.exports.style = style;

// Watch and compile scss files
module.exports.watch = watch;

// Watch, compile scss files and start a server, auto-reloading html and injecting css
module.exports.default = dev;

var gulp = require('gulp'),
  LiveServer = require('gulp-live-server'),
  browserSync = require('browser-sync'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  reactify = require('reactify'),
  sass = require('gulp-sass'),
  minifyCSS = require('gulp-clean-css'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  changed = require('gulp-changed');

//destinations for scss and css
  var SCSS_SRC = "./app/styles/**/*.scss";
   var SCSS_DEST = "./app/styles";

//live updates
  gulp.task('live-server', function() {
    var server = new LiveServer('server/main.js');
    server.start();
  });

//compiles scss --> css
  gulp.task('compile-scss', function() {
    gulp.src(SCSS_SRC).pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST));
  });

//watches changes on scss
  gulp.task('watch-scss', function() {
    gulp.watch(SCSS_SRC, ['compile-scss']);
  });

//bundles jsx --> js
  gulp.task('bundle', ['watch-scss', 'copy'], function() {
        return browserify({
             entries: 'app/main.jsx',
             debug:true,
       })
        .transform(reactify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./.tmp'));
 });

//copy css to temp file so app.js has access to it
 gulp.task('copy', function(){
       gulp.src(['app/**/*.css'])
       .pipe(gulp.dest('./.tmp'));
 })


//does all at once
  gulp.task('serve', ['bundle', 'live-server'], function() {
    browserSync.init(null, {
      proxy:"http://localhost:7778",
      port: 9002
    })
  });

var gulp  = require("gulp"),
uglify    = require('gulp-uglify'),
minifyCss = require('gulp-minify-css'),
concat    = require('gulp-concat'),
browserSync = require('browser-sync');

gulp.task("js-jquery",function(){
  return gulp.src("src/js/lv-ripple.jquery.js")
  .pipe(concat('lv-ripple.jquery.js'))
  .pipe(gulp.dest("dist/js"));
});

gulp.task("js",["js-jquery"]);

gulp.task("js-jquery:min",function(){
  return gulp.src("src/js/lv-ripple.jquery.js")
  .pipe(concat('lv-ripple.jquery.min.js'))
  .pipe(uglify({
    preserveComments: "some"
  }))
  .pipe(gulp.dest("dist/js"));
});

gulp.task("css",function(){
  return gulp.src("src/css/lv-ripple.css")
  .pipe(concat('lv-ripple.css'))
  .pipe(gulp.dest("dist/css"));
});

gulp.task("js:min",["js-jquery:min"]);

gulp.task("css:min",function(){
  return gulp.src("src/css/lv-ripple.css")
  .pipe(concat('lv-ripple.min.css'))
  .pipe(minifyCss())
  .pipe(gulp.dest("dist/css"));
});

gulp.task("default",["js","js:min","css","css:min"]);

gulp.task("watch",function(){
  browserSync.init({
      server: "./",
  });
});
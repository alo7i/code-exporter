(function () {
  'use strict';

  const gulp = require('gulp');
  const path = require('path');
  const $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', '@feizheng/gulp-*']
  });

  gulp.task('scripts', function () {
    return gulp
      .src('src/*.js')
      .pipe($.insert.transform(function (contents, file) {
        var comment = '// filename: ' + path.basename(file.history[0]) + '\n';
        return comment + contents;
      }))
      .pipe($.concat('all.js'))
      .pipe(gulp.dest('dist'));
  });
})();

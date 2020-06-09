(function () {
  'use strict';

  const gulp = require('gulp');
  const path = require('path');
  const $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', '@feizheng/gulp-*']
  });

  gulp.task('scripts', function () {
    return gulp
      .src('src/projects/**/*.ts')
      .pipe($.insert.transform(function (contents, file) {
        var comments = [
          path.basename(file.history[0]),
          '\n',
          '---',
          '\n'
        ].join('');
        return comments + contents;
      }))
      .pipe($.concat('all.md'))
      .pipe(gulp.dest('dist'));
  });
})();

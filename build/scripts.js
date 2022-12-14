(function () {
  'use strict';

  const gulp = require('gulp');
  const path = require('path');
  const $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  gulp.task('scripts', function () {
    const { conf } = nx.$global;
    const { source } = conf.gets();
    return gulp
      .src(source)
      .pipe(
        $.insert.transform(function (contents, file) {
          var comments = [path.basename(file.history[0]), '\n', '---', '\n'].join('');
          return comments + contents;
        })
      )
      .pipe($.removeEmptyLines())
      .pipe($.concat('all.md'))
      .pipe(gulp.dest('dist'));
  });
})();

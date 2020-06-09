(function() {
  'use strict';

  const gulp = require('gulp');
  const fs = require('fs');

  require("@feizheng/next-js-core2");

  //import
  fs.readdirSync('./build').map(function(file) {
    require('./build/' + file);
  });

  gulp.task('default', gulp.series(['clean', 'scripts']));
})();

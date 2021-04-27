(function () {
  'use strict';

  const gulp = require('gulp');
  const fs = require('fs');

  require('@jswork/next');
  require('@jswork/next-global');
  require('@jswork/next-yaml-configuration');

  //import
  fs.readdirSync('./build').map(function (file) {
    require('./build/' + file);
  });

  nx.global({
    conf: new nx.YamlConfiguration({ path: './config.yml' })
  });

  gulp.task('default', gulp.series(['clean', 'scripts']));
})();

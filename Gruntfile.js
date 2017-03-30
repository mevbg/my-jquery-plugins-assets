module.exports = function(grunt) {
  var path = require('path'),
      pkg = grunt.file.readJSON('package.json'),
      env = grunt.option('target') || 'dev';

  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'configs/grunt'),
    data: {
      pkg: pkg,
      env: env
    }
  });

  grunt.registerTask('build', function() {
    grunt.task.run(['concurrent:build']);

    if (env === 'prod') {
      grunt.file.write('CNAME', 'assets.martinmetodiev.com');
    }
  });
};
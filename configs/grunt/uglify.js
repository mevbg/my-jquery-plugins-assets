var grunt = require('grunt');

module.exports = {
  options: {
    preserveComments: false
  },

  page: {
    options: {
      sourceMap: grunt.option('target') !== 'prod',
      compress: {
        drop_debugger: grunt.option('target') === 'prod',
        drop_console: grunt.option('target') === 'prod'
      }
    },
    src:  'dist/js/page_bundle.js',
    dest: 'dist/js/page.js'
  },

  libs: {
    src:  'dist/js/libs_bundle.js',
    dest: 'dist/js/libs.js'
  }
};
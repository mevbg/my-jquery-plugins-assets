var grunt = require('grunt');

module.exports = {
  page: {
    options: {
      separator: grunt.option('target') !== 'prod' ? ';\n\n\n\n' : ';\n',
      stripBanners: grunt.option('target') !== 'prod' ? false : {force: true}
    },
    src: [
      'src/scripts/markdown.js'
    ],
    dest: 'dist/js/page_bundle.js'
  },

  libs: {
    src: [
      'node_modules/css-browser-selector/css_browser_selector.min.js',
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/fastclick/lib/fastclick.js',
      'node_modules/showdown/dist/showdown.min.js',
      'node_modules/prismjs/prism.js'
    ],
    dest: 'dist/js/libs_bundle.js'
  }
};
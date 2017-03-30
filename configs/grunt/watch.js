module.exports = {
  options: {
    livereload: false,
    event: ['changed', 'added', 'deleted']
  },

  styles: {
    files: ['src/styles/**/*.scss'],
    tasks: ['sasslint', 'clean:styles', 'stripCssComments', 'sass']
  },

  scripts: {
    files: ['src/scripts/**/*.js'],
    tasks: ['jshint', 'clean:scripts', 'concat:page', 'uglify:page']
  }
};
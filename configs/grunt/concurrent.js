module.exports = {

  build: [
    // favicons
    ['realFavicon'],

    // styles
    ['stripCssComments', 'sass'],

    // scripts
    ['concat', 'uglify']
  ],

  review: [
    'open:build',
    'open:repo'
  ]

};
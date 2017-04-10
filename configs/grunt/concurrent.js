module.exports = {

  build: [
    // favicons
    ['realFavicon'],

    // styles
    ['stripCssComments', 'sass'],

    // scripts
    ['concat', 'uglify'],

    // cover
    ['copy:cover']
  ],

  review: [
    'open:build',
    'open:repo'
  ]

};
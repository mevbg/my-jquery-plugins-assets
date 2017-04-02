var grunt = require('grunt');

module.exports = {
  options: {
    iconsPath: '/',
    design: {
      ios: {
        pictureAspect: 'backgroundAndMargin',
        backgroundColor: '#ffffff',
        margin: '14%'
      },
      desktopBrowser: {},
      windows: {
        pictureAspect: 'noChange',
        backgroundColor: '#da532c',
        onConflict: 'override'
      },
      androidChrome: {
        pictureAspect: 'backgroundAndMargin',
        margin: '17%',
        backgroundColor: '#ffffff',
        themeColor: '#ffffff',
        manifest: {
          name: '<%= pkg.title %>',
          display: 'browser',
          orientation: 'notSet',
          onConflict: 'override',
          declared: true
        }
      },
      safariPinnedTab: {
        pictureAspect: 'silhouette',
        themeColor: '#5bbad5'
      }
    },
    settings: {
      scalingAlgorithm: 'Lanczos',
      errorOnImageTooSmall: false
    }
  },

  demo: {
    src: 'src/images/favicon.png',
    dest: 'dist/favicons'
  }
};
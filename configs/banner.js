module.exports =
  '/*! \n' +
  ' <%= pkg.title %> v<%= pkg.version %>\n' +
  ' <%= pkg.homepage%>\n' +
  '\n' +
  ' Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
  ' Licensed under the <%= pkg.license %> license.\n' +
  '*/\n';
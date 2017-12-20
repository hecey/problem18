module.exports = function(grunt) {



  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      scripts: {
        files: ['libs/*.js'],
        tasks: ['default']
      },
    },
    // Configure a mochaTest task
    mochaTest: {
      test: {
            src: ['test/**/*.js']
            },
            options: {
              run: true,
              reporter: 'spec',
              captureFile: 'results.txt', // Optionally capture the reporter output to a file
              quiet: false, // Optionally suppress output to standard out (defaults to false)
              //ui: 'tdd'
              //clearRequireCache: false, // Optionally clear the require cache before running tests (defaults to false)
              //clearCacheFilter: (key) => true, // Optionally defines which files should keep in cache
              //noFail: false // Optionally set to not fail on failed tests (will still fail on other errors)
            }


    }
  });

  // Add the grunt-mocha-test tasks.
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', 'mochaTest');

};

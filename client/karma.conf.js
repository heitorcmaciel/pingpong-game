// Karma configuration
// Generated on Wed Aug 26 2015 13:57:22 GMT-0300 (BRT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [       
      'vendor/jquery/dist/jquery.min.js',       
      'vendor/underscore/underscore-min.js', 
      'vendor/angular/angular.js',       
      'vendor/angular-resource/angular-resource.min.js', 
      'vendor/angular-route/angular-route.min.js',       
      'vendor/angular-sanitize/angular-sanitize.min.js', 
      'vendor/angular-hammer/angular-hammer.js', 
      'vendor/angular-mocks/angular-mocks.js',
      'vendor/hammerjs/hammer.min.js', 
      'solution/config.js', 
      'solution/app.js', 
      'solution/base/**/*.js',
      'solution/tests/*.js'      
    ],


    // list of files to exclude
    exclude: [        
        //'solution/**/*.json',
        //'vendor/**/*.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        //'solution/base/**/*.js' : 'coverage'
    },
    plugins: [
      'karma-teamcity-reporter',
      'karma-jasmine',      
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-html-reporter'
      ],

    // coverageReporter : {
    //     type: 'html',
    //     dir: 'tests/specs/coverage/'
    // },



    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'progress', 'html', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
     // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera 
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],



    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}

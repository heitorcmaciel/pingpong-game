module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig(
	{
        pkg: grunt.file.readJSON('package.json'),        			
		uglify : {
		  min : {
		    files : { 'scripts/solution-meanbiz-1.0.0.js' : 
		    	[
		    		'solution/config.js',
		    		'solution/app.js', 
		    		'solution/base/services/appStateService.js',
		    		'solution/base/services/debugServices.js',		    		
		    		'solution/base/services/httpServices.js',
		    		'solution/base/services/webSQLServices.js',
		    		'solution/base/controllers/baseCtrl.js',
		    		'solution/base/controllers/dummyCtrl.js',
		    		'solution/base/directives/baseDirectives.js',
		    		'solution/base/filters/baseFilters.js'		    		
		    		] },
		 }
		},
		copy: {
		  main: {
		    files: [
		      // includes files within path
		      {expand: true, flatten: true, src: 
		      	['scripts/build/*.js'], 
		      	dest: 'scripts/', filter: 'isFile'},
		     
		    ],
		  },
		},
    });

    // concat related tasks        

    //grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.loadNpmTasks('grunt-contrib-uglify');

    //grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['uglify']);

};

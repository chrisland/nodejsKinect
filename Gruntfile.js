module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

  	nwjs: {
  		options: {
  			version: '0.14.5',
  			platforms: ['win32'],
  			app_name: '<%= pkg.name %>',
  			app_version: '<%= pkg.version %>',
  			buildDir: './release',
  			cacheDir: './release/cache',
  			macCredits: 'credits.html',
  			//macIcns: 'icon.icns',
  			//macZip: true
  			//,winIco: 'icon.ico'
        force_download: false

  		}
  		,src: ['./source/**/*'] // Your node-wekit app
  	},

  	open : {
  	    default : {
  	      path: './release/Crisper/osx64/Crisper.app'
  	    }
  	}

  });

	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('grunt-nw-builder');


  grunt.registerTask('default', ['nwjs']);

};

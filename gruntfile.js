module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				// define a string to put between each file in the concatenated output
				separator: ';'
			},
			dist: {
				// the files to concatenate
				src: ['app/js/**/*.js'],
				// the location of the resulting JS file
				dest: 'static/js/<%= pkg.name %>.js'
			}
		},
		uglify: {
			options: {
				// the banner is inserted at the top of the output
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				files: {
					'static/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
				}
			}
		},
		less: {
			development: {
				files: {
					'static/css/<%= pkg.name %>.css': 'app/css/**/*.less'
				}
			}
		},
		pug: {
			compile: {
				options: {
					data: {
						debug: false
					}
				},
				files: [
					{
						cwd: 'app/templates',
						src: ['**/*.jade'],
						dest: 'static/templates',
						expand: true,
						ext: '.html'
					}
				]
			}
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'static/css',
					src: ['*.css', '!*.min.css'],
					dest: 'static/css',
					ext: '.min.css'
				}]
			}
		},
		clean: ['static']
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-pug');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('default', ['clean', 'less', 'pug', 'concat', 'uglify', 'cssmin']);
};

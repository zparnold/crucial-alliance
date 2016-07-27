module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/js/bootstrap.js'],
                dest: 'dist/js/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'src/js/bootstrap.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        less: {
            compileBootswatch: {
                options: {
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapURL: '<%= pkg.name %>.css.map',
                    sourceMapFilename: 'dist/css/<%= pkg.name %>.css.map'
                },
                src: ['src/css/bootswatch.less','src/css/custom.less'],
                dest: 'dist/css/<%= pkg.name %>.css'
            }
        },

        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: 'src/js/bootstrap.js',
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false
                }
            },
            css:{
                files: 'src/css/*.less',
                tasks: ['less']
            },
            html: {
                files: ['*.html'],
                tasks: ['build']
            }
        },
        connect: {
            base: {
                options: {
                    port: 3000,
                    livereload: true,
                    open: true
                }
            },
            keepalive: {
                options: {
                    port: 3000,
                    livereload: true,
                    keepalive: true,
                    open: true
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'dist/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            },
            options: {
                sourceMap: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-cssmin');


    grunt.registerTask('server', 'connect:keepalive');
    grunt.registerTask('build', ['concat', 'uglify', 'less', 'cssmin']);
    grunt.registerTask('default', ['concat', 'uglify', 'less', 'cssmin' ,'connect:base', 'watch']);
    grunt.registerTask('test', ['jshint']);
    //grunt.registerTask('default', ['concat', 'uglify', 'less']);

};
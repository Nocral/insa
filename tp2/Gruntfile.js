module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      concat: {
        options: {
          separator: '\n\n'
        },
        dist: {
          src: ['js/*.js'],
          dest: 'dist/<%= pkg.name %>.js'
        }
      },
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        dist: {
          files: {
            'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
          }
        }
      },
      mochaTest: {
        test:{
          options: {
            reporter: 'mochawesome'
          },
          src: ['test/*.js']
        }
      },
      jshint: {
        files: ['Gruntfile.js', 'js/*.js', 'test/*.js'],
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
      watch: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint', 'mochaTest', 'concat', 'uglify']
      }
    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    var changedFiles = Object.create(null);
    var onChange = grunt.util._.debounce(function() {
      grunt.config('jshint.all.src', Object.keys(changedFiles));
      changedFiles = Object.create(null);
    }, 200);
    grunt.event.on('watch', function(action, filepath) {
      changedFiles[filepath] = action;
      onChange();
    });
  
    grunt.registerTask('test', ['jshint', 'mochaTest', 'concat', 'uglify']);
    
    // Default task(s).
    grunt.registerTask('default', ['jshint', 'mochaTest', 'concat', 'uglify']);
  
  };
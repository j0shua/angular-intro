module.exports = function(grunt){

  require('time-grunt')(grunt);

  grunt.initConfig({
    jshint: {
      // lint the client code
      client: {
        src: ['app/scripts/**/*.js']
        /* options:{
          jshintrc: '.jshintrc'
        }
        */
      },
      // lint the build itself
      build: {
        src: ['Gruntfile.js']
      }
    },

    clean: {
      // clean up for a new build: rm the working and dist dirs
      build: ['.tmp', 'dist']
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },

    copy: {
      // for js copy the files to the .tmp working directory
      // so we can work on the copies instead of the originals
      js: {
        expand: true,
        cwd: 'app',
        src: ['scripts/**/*.js', 'bower_components/angular/angular.js'],
        dest: '.tmp/js/'
      },
      // html will be copied as is directly to the dist folder
      html: {
        expand: true,
        cwd: 'app',
        src: ['index.html', 'views/**/*.html'],
        dest: 'dist'
      }
    },

    connect: {
      // general app static serving
      server: {
        options: {
          base: ['bower_components', 'app'],
          open: true,
          livereload: true
        }
      },
      // serve the build so we can check that it works correctly
      build: {
        options: {
          base: ['dist'],
          open: true,
          keepalive: true
        }
      }
    },


    watch: {
      client: {
        files: ['public/js/**/*.js'],
        tasks: [
          'jshint:client'
        ],
        options: {
          livereload: true,
        },
      },
      // run the whole build again if the process changes
      rebuild: {
        files: ['Gruntfile.js'],
        tasks: ['jshint:build', 'build:debug']
      }
    },

    // where should usemin look for links to assets/files?
    useminPrepare: {
      html: 'app/index.html'
    },

    // add md5 hash to the filename ex: name.HASH.js
    // of js files in the dist dir
    filerev: {
      options: {
        algorithm: 'md5',
        length: 8
      },
      source: {
        files: [{
          src: ['dist/**/*.js', 'dist/**/*.css']
        }]
      }
    },

    // have usemin/grunt update the html build:blocks
    // to point to the rev-ed filename
    usemin: {
      html: 'dist/**/*.html'
    },

    bump: {
      options: {
        pushTo: 'origin'
      }
    },

    notify_hooks: {
      options: {
        enabled: true,
        max_jshint_notifications: 5, // maximum number of notifications from jshint output
        title: "Angular Demo", // defaults to the name in package.json, or will use project directory's name
        // no need to notify on success; but WILL notify on error
        success: false, // whether successful grunt executions should be notified automatically
        duration: 1 // the duration of notification in seconds, for `notify-send only
      }
    }

  });

  // load all the npm tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-filerev');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-conventional-changelog');
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-karma');

  grunt.task.run('notify_hooks');

  // when there is an event from the watcher
  // update the jshint source param to only hint that single file
  grunt.event.on('watch', function(action, filepath) {
    grunt.config('jshint.client.src', filepath);
  });

  //grunt.registerTask('default', ['watch']);

  grunt.registerTask('build:debug', 'Lint and compile', [
    'jshint', 'copy:js'
  ]);

  grunt.registerTask('notes', ['bump-only', 'changelog', 'bump-commit']);

  grunt.registerTask('build:release', [
    // first lint the files or it's a non starter
    'jshint',
    // clean up the working env
    'clean',
    // copy the html into dist
    'copy:html',
    // copy the js into .tmp working dir
    'copy:js',
    // have usemin look for build blocks
    'useminPrepare',
    // run the generated concat task to make a single file
    'concat:generated',
    // minify the css
    'cssmin:generated',
    // uglify the single concat file
    'uglify:generated',
    // stamp the files with md5 hash for cache busting
    'filerev',
    // update html file to use single links to the new min files
    'usemin'
]);


  grunt.registerTask('dev', ['build:debug', 'connect:server', 'watch']);
};

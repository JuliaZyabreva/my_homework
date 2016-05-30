module.exports = function(grunt) {

  grunt.initConfig({
         
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: 'js/src/*.js',
        dest: 'js/dest/main.js'
      }
    },
 cssmin: { 
       css: {
        src: 'css/src/*.css',
        dest: 'css/dest/style.min.css'
      }
 
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  
  grunt.registerTask('default', ['concat', 'cssmin']);

};
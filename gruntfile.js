module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass:{
            dist:{
                options:{
                    style: 'compressed'
                },
                files:{
                    'dist/styles/main.css': 'src/styles/main.scss'
                }
            }
        },
        watch:{
            saas:{
                files: 'src/styles/**/*.scss',
                tasks:['sass']
            }
        }
    })

    grunt.loadNpmTask('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('default', ['sass', 'watch']);
}
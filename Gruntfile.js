module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            files: {
                expand: true,
                cwd: 'src/',
                src: 'img/*',
                dest: 'build/',
            }
        },
        postcss: {
            options: {
                processors: [
                    require('autoprefixer')(),
                    require('tailwindcss')()
                ]
            },
            dynamic_mappings: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: ['css/*.css'],
                        dest: 'build/'
                    }
                ]
            }
        },
        pug: {
            compile: {
                files: {
                    'build/index.html': 'src/index.pug'
                    // {
                    //     expand: true,
                    //     cwd: 'src/',
                    //     src: ['*.pug'],
                    //     dest: 'build/',
                    //     ext: 'html'
                    // }
                }
            }
        },
        watch: {
            options: {
                cwd: 'src/'
            },
            copy: {
                files: 'img/*',
                tasks: ['copy']
            },
            css: {
                files: ['css/*.css', '../tailwind.config.js'],
                tasks: ['postcss']
            },
            pug: {
                files: '*.pug',
                tasks: ['pug']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('@lodder/grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['copy', 'postcss', 'pug']);
}

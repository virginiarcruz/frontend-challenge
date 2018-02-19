module.exports = function(grunt) {

    var packageFile = grunt.file.readJSON('package.json');
    var authors   = "Virginia Rodrigues";

    for( i in packageFile.authors ){
        if( authors == "" ){
            authors = packageFile.authors[i];
        }else{
            authors = authors+"\n\t  "+packageFile.authors[i];
        }
    }

    var hr = '----------------------------------------------------\n';
    var bannerFiles = '/*\n' +
        hr+
        'FrontEnd Challenge - Conta Azul\n' +
        hr+
        'projeto\t: <%= pkg.name %>\n' +
        'versao\t: <%= pkg.version %>\n' +
        'data\t: <%= grunt.template.today("dd/mm/yyyy HH:MM:ss") %>\n' +
        'autora\t: <%= authors %>\n' +
        hr+
        '*/\n';

    grunt.initConfig({
        pkg: packageFile,
        authors: authors,
        watch: {
            scripts: {
                files: [
                    'src/js/**/*.js'
                ],
                tasks: ['concat']
            },
            sass: {
                files: ['**/*.scss'],
                tasks: ['sass', 'cssmin']
            },
        },

        uglify: {
            options: {
                mangle: false,
                banner:bannerFiles
            },
            main: {
                files: {
                    'src/js/**/*.js':''
                }
            }
        },

        concat: {
            options: {
                separator: ';\n',
                stripBanners:true,
                banner:bannerFiles
            },
            main: {
                src: '',
                dest: ''
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    noCache: true,
                },
                files: {
                    'app/assets/css/style.css': 'app/components/style.scss'
                }
            }
        },

        cssmin: {
            combine: {
                options: {
                    banner:bannerFiles,
                    keepSpecialComments:0
                },
                files: {
                    'app/assets/css/style.min.css': [
                    'app/assets/css/style.css',
                    ]
                }
            }
        },

        copy: {
            script: {
                src: 'app/assets/scripts/app.js',
                dest: 'app/assets/scripts/app.js'
            },

            maps: {
                flatten: true,
                expand: true,
                filter: 'isFile',
                cwd: 'source/',
                src : '**/.html',
                dest: 'app/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('dev', ['sass','watch']);
    grunt.registerTask('build'  , ['sass','cssmin']);
};

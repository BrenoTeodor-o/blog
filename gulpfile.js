// Gravamos as dependencias do gulp em variaveis
const gulp 		= require('gulp');             // Pacote do gulp
const sass 		= require('gulp-sass');        // Pacote do compilador do sass para o Gulp
const minifyCSS = require('gulp-csso');        // Pacote do minificador de css para o Gulp
const concat 	= require('gulp-concat');      // Pacote para concatenar arquivos com o Gulp

const uglify 	= require('gulp-uglify');      // Pacote para "enfeiar" o código e deixar ilegivel
const babel     = require('gulp-babel');       // Pacote para utilizar ES6 sem problema de compatibilidade
const minify    = require("gulp-babel-minify");

const paths = {
    styles: [
        './resources/assets/sass/styles/*.sass',
         './resources/assets/sass/styles/*.scss'
    ],
    scripts: {
        js: [

        ]
    },
};

gulp.task('default', ['watch']);

gulp.task('styles', function(){
    return gulp.src(paths.styles)
    .pipe(sass({includePaths: ['./resources/assets/sass/styles'], errLogToConsole: true })) // Gulp irá rodar o sass incluindo os caminhos da pasta como import
    // .pipe(sass.sync({outputStyle: 'compressed', errLogToConsole: true}))
    .pipe(concat('style.css'))  // Irá concatenar os arquivos e gerar um arquivo style.css
    // .pipe(minifyCSS())          // Irá minificar o css assim que compilado
    .pipe(gulp.dest('./public/css/'));
});

// modificar JS para ser rodado no watch
gulp.task('js', () => {
    return gulp.src(paths.scripts.js) // Arquivo(s) que o gulp irá procurar na tarefa
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(minify())               // Gulp irá deixar o código ilegivel dificultando cópias
        .pipe(concat('script.min.js'))// Irá concatenar os arquivos e gerar um arquivo script.min.js
        .pipe(gulp.dest('./dist/js/'));         // Irá salvar na raiz do tema
});

    gulp.task('watch', () => {
        gulp.watch(paths.styles, ['styles']);
    });
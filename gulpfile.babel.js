/**
*
* Gulpfile for validate.js
*
* @author Daniel Leite de Oliveira <dleitee@gmail.com>
*
*/

import gulp from 'gulp'
import babel from 'gulp-babel';
import source from 'vinyl-source-stream'
import uglify from 'gulp-uglify'
import buffer from 'vinyl-buffer'


gulp.task('js', () => {
  gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(uglify())
  .pipe(gulp.dest('dist'));
})


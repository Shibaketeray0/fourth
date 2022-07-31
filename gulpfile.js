var 
gulp = require("gulp"),
livereload = require("gulp-livereload");

const sass = require('gulp-sass')(require('sass'));

gulp.task("reload-css", function(){
 gulp.src('./*.scss')
 .pipe(sass().on('error', sass.logError))
 .pipe(gulp.dest('./'))
 .pipe(livereload());
});
gulp.task("default", function(){
    livereload.listen();
    gulp.watch('./*.scss', gulp.parallel('reload-css', 'default'));
});
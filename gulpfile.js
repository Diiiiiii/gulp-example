const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));

gulp.task("styles", function() {
    return gulp.src("./src/style.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist"));
});
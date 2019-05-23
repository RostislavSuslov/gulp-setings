const gulp = require('gulp'); // npm i gulp  --> mpm init --> npm i gulp-sass gulp-sourcemaps gulp-watch --SD -->
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');

gulp.task('sass-compile', function(){
	return gulp.src('./scss/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('./css/'))
})


gulp.task('watch', function(){
	gulp.watch('./scss/**/*.scss', gulp.series('sass-compile'))
})
//latest
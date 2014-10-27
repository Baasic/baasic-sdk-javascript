var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('framework', function() {
  return gulp.src('src/framework/**/*.js')
	.pipe(plugins.order(["utility.js", "browserEvents.js", "*.js"]))
	.pipe(plugins.concat('baasic-javascript-framework.js'))
	.pipe(plugins.header('(function (window, document, $, undefined) {\nvar MonoSoftware = window.MonoSoftware || (window.MonoSoftware = {});\n'))
	.pipe(plugins.footer('\n})(window, document, jQuery);'))
	.pipe(plugins.beautify())
	.pipe(gulp.dest('dist'))
	.pipe(plugins.uglify())
	.pipe(plugins.rename('baasic-javascript-framework.min.js'))
	.pipe(gulp.dest('dist'));
});

gulp.task('jqueryTransport', function() {
  return gulp.src('src/jquery.extension/**/*.js')
	.pipe(plugins.concat('baasic-jquery-framework.js'))
	.pipe(plugins.beautify())
	.pipe(gulp.dest('dist'))
	.pipe(plugins.uglify())
	.pipe(plugins.rename('baasic-jquery-framework.min.js'))
	.pipe(gulp.dest('dist'));
});



gulp.task('default', ['framework', 'jqueryTransport']);

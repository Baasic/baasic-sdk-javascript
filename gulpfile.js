var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('framework', function() {
  return gulp.src('src/MonoSoftware.Baasic.Framework.js')
	.pipe(gulp.dest('dist'))
	.pipe(plugins.uglify())
	.pipe(plugins.rename('MonoSoftware.Baasic.Framework.min.js'))
	.pipe(gulp.dest('dist'));
});

gulp.task('jqueryTransport', function() {
  return gulp.src('src/MonoSoftware.Baasic.Framework.jquery.js')
	.pipe(gulp.dest('dist'))
	.pipe(plugins.uglify())
	.pipe(plugins.rename('MonoSoftware.Baasic.Framework.jquery.min.js'))
	.pipe(gulp.dest('dist'));
});



gulp.task('default', ['framework', 'jqueryTransport']);

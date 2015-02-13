/* jshint node: true */
'use strict';

var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	stylish = require('jshint-stylish');

gulp.task('framework', function() {
  return gulp.src('src/framework/**/*.js')
	.pipe(plugins.order(['utility.js', 'browserEvents.js', '*.js']))
	.pipe(plugins.concat('baasic-javascript-framework.js'))
	.pipe(plugins.header('(function (window, document, $, undefined) {\nvar MonoSoftware = window.MonoSoftware || (window.MonoSoftware = {});\n'))
	.pipe(plugins.footer('\n}(window, document, window.jQuery));'))
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

gulp.task('jshint', function () {
  return gulp.src([
    'gulpfile.js',
    'src/**/*.js'
  ])
    .pipe(plugins.jshint())
	.pipe(plugins.jshint.reporter(stylish));
});

gulp.task('default', ['jshint', 'framework', 'jqueryTransport']);

var gulp = require('gulp'),
  usemin = require('gulp-usemin'),
  wrap = require('gulp-wrap'),
  connect = require('gulp-connect'),
  watch = require('gulp-watch'),
  minifyCss = require('gulp-cssnano'),
  minifyJs = require('gulp-uglify-es').default,
  concat = require('gulp-concat'),
  less = require('gulp-less'),
  rename = require('gulp-rename'),
  minifyHTML = require('gulp-htmlmin'),
  shell = require('gulp-shell'),
  replace = require('gulp-replace');

  var paths = {
    scripts: 'solution/**/*.*',
    plugins: 'plugins/**/*.*',
    libs: 'libs/**/*.*',
    assets: 'assets/**/*.*',
    templates: 'views/**/*.html',
    styles: 'assets/**/*.css',
    images: 'assets/**/*.{svg,png,jpg,jpeg,gif,ico}',
    app: 'solution/app.js',
    index: 'index.html',
    bower_fonts: 'assets/font-awesome/**/*.{ttf,woff*,woff2,eof,svg,eot}',
    awesome_css: 'assets/font-awesome/css/**/*.min.css'    
};

gulp.task('usemin', function() {
	return gulp.src(paths.index)
		.pipe(usemin({
			js: [minifyJs(), 'concat']
		})).pipe(gulp.dest('dist/'));
});



gulp.task('custom-plugins', function() {
	return gulp.src(paths.plugins)
		.pipe(gulp.dest('dist/plugins'));
});

gulp.task('custom-templates', function() {
	return gulp.src(paths.templates)
		.pipe(minifyHTML())
		.pipe(gulp.dest('dist/views'));
});

gulp.task('custom-assets', function() {
	return gulp.src(paths.assets)
		.pipe(gulp.dest('dist/assets/'));
});

gulp.task('build-custom', ['custom-templates', 'custom-plugins', 'custom-assets']);

gulp.task('watch', function() {
	gulp.watch([paths.templates], ['custom-templates']);
	gulp.watch([paths.plugins], ['custom-plugins']);
	gulp.watch([paths.assets], ['custom-assets']);
	gulp.watch([paths.scripts], ['usemin']);
	gulp.watch([paths.index], ['usemin']);
});


gulp.task('webserver', function() {
	connect.server({
		root: 'dist',
		livereload: true,
		port: 8080
	});
});

gulp.task('livereload', function() {
	gulp.src(['dist/**/*.*'])
		.pipe(watch(['dist/**/*.*']))
		.pipe(connect.reload());
});

gulp.task('build-dev', []);
gulp.task('build-prod', []);

gulp.task('build', ['usemin', 'build-custom']);
gulp.task('default', ['build', 'webserver', 'livereload', 'watch']);


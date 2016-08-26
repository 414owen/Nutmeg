var gulp = require('gulp');
var DEST = 'dist';
var rename = require("gulp-rename");

var toc    = require('gulp-doctoc'),
    marked = require('gulp-marked');

/*

gulp.task('doc', function (cb) {
	var jsdoc = require('gulp-jsdoc3');
	var config = require('./jsdoc.json');
    gulp.src(['README.md', 'src/*.js'], {read: false})
        .pipe(jsdoc(config, cb));
});

gulp.task('closure-compiler', function () {
	var closureCompiler = require('gulp-closure-compiler');
    return gulp.src('src/*.js')
	    .pipe(closureCompiler({
	        compilerPath: 'node_modules/google-closure-compiler/compiler.jar',
	        compilerFlags: {
	        	closure_entry_point: 'src/nutmeg.js',
		        compilation_level: 'SIMPLE_OPTIMIZATIONS',
		        create_source_map: 'dist/Nutmeg-C.js.map',
		        define: [],
		        externs: [],
		        only_closure_dependencies: true,
		        output_wrapper: '(function(){%output%}).call(window);',
		        warning_level: 'VERBOSE'
		    }
	    }))
	    .pipe(rename('Nutmeg-C.js'))
	    .pipe(gulp.dest(DEST));
});

*/

gulp.task('uglify-compiler', function() {
	var uglify = require('gulp-uglify');
	gulp.src('src/*.js')
		.pipe(uglify({
       preserveComments:'some'
     }))
		.pipe(rename('nutmeg.min.js'))
		.pipe(gulp.dest(DEST));
});

gulp.task('default', ['uglify-compiler']);

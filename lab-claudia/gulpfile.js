'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

//run mocha
gulp.task('test', function() {
  gulp.src('test.js', {read: false})
    // gulp-mocha needs filepaths so you can't have any plugins before it
    .pipe(mocha({reporter: 'nyan'}));
});

//run eslint
gulp.task('lint', function() {
  return gulp.src(['**/*.js','!node_modules/**'])
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
});

//dev task
gulp.task('dev', function(){
  gulp.watch(
    ['**/*.js', '!node_modules/**'], ['lint', 'test']);
});

//degault task
gulp.task('default', ['dev']);

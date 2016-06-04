var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var inject = require('gulp-inject');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var streamqueue = require('streamqueue');
var sourcemaps = require('gulp-sourcemaps');
var mainbowerfiles = require('main-bower-files');

gulp.task('default', function() {
    console.log('[:)] Welcome to test gulp - sonseait');
});

gulp.task('sass:clean', function() {
    return gulp.src('./app/assets/css/**/*.*', { read: false }).pipe(clean());
});

gulp.task('sass:compile', ['sass:clean'], function() {
    var stream = streamqueue({ objectMode: true });
    var pageClasses = [
        './app/assets/sass/metronic/pages/login.scss',
        './app/assets/sass/metronic/pages/profile.scss',
        './app/assets/sass/metronic/pages/lock.scss',
    ];
    stream.queue(gulp.src('./app/assets/sass/metronic/bootstrap.scss', { base: './app/assets/sass' }).pipe(sass()).pipe(gulp.dest('./app/assets/css')),
        gulp.src(['./app/assets/sass/metronic/global/components.scss', './app/assets/sass/metronic/global/plugins.scss'], { base: './app/assets/sass' }).pipe(sass()).pipe(gulp.dest('./app/assets/css')),
        gulp.src(pageClasses, { base: './app/assets/sass' }).pipe(sass()).pipe(gulp.dest('./app/assets/css')),
        gulp.src('./app/assets/sass/metronic/layout/*.scss', { base: './app/assets/sass' }).pipe(sass()).pipe(gulp.dest('./app/assets/css')),
        gulp.src('./app/assets/sass/metronic/layout/themes/default.scss', { base: './app/assets/sass' }).pipe(sass()).pipe(gulp.dest('./app/assets/css')),
        gulp.src('./app/assets/sass/*.scss', { base: './app/assets/sass' }).pipe(sass()).pipe(gulp.dest('./app/assets/css'))).done();
});

gulp.task('uglify', function() {
    var files = []; // array of files
    return q.fcall(function() {
        return gulp.src(files, { base: './' }).pipe(sourcemaps.init())
            .pipe(sourcemaps.write('./', { addComment: false }))
            .pipe(gulp.dest('./'));
    }).then(function(source) {
        return gulp.src(files, { base: './' }).pipe(uglify())
            .pipe(rename({ suffix: '.min', extname: '.js' }))
            .pipe(gulp.dest('./'));
    });
});

gulp.task('libs:copy', function() {
    var stream = streamqueue({ objectMode: true });
    return stream.queue(
        gulp.src(['./app/assets/libs/*', '!./app/assets/libs/kendo', '!./app/assets/libs/metronic'], { read: false }).pipe(clean()),
        gulp.src(mainbowerfiles(), { base: './bower_components' }).pipe(rename(function(path) {
            path.dirname = path.dirname.replace(/\\dist|\\release|\\lib/, '');
        })).pipe(gulp.dest('./app/assets/libs'))
    ).done();
});

gulp.task('libs:inject', function() {
    var assets = gulp.src(['./app/assets/libs/jquery/*.js', './app/assets/**/*.{css,js}'], { read: false });
    var modules = gulp.src(['./app/app.module.js', './app/*.js', './app/shared/**/*.js', './app/modules/**/*.js'], { read: false });
    gulp.src('./app/index.html')
        .pipe(inject(assets, { relative: true, name: 'assets' }))
        .pipe(inject(modules, { relative: true, name: 'modules' }))
        .pipe(gulp.dest('./app/'));
});

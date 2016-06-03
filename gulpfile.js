var gulp = require('gulp');
var git = require('gulp-git');
var merge2 = require('merge2');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var inject = require('gulp-inject');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var sourcemaps = require('gulp-sourcemaps');
var mainbowerfiles = require('main-bower-files');

gulp.task('default', function () {
    console.log('[:)] Welcome to test gulp - sonseait');
});

gulp.task('git:checkin', function () {

});

gulp.task('git:latest', function () {

});

gulp.task('git:undo', function () {

});

gulp.task('copy', function () {
    return merge2(
        gulp.src(['./app/assets/libs/*', '!./app/assets/libs/kendo'], { read: false }).pipe(clean()),
        gulp.src(mainbowerfiles(), { base: './bower_components' }).pipe(rename(function (path) {
            path.dirname = path.dirname.replace(/\\dist|\\release|\\lib/, '');
        })).pipe(gulp.dest('./app/assets/libs'))
    );
});

gulp.task('compile:sass', function () {
    return merge2(
        gulp.src('./app/assets/css/*').pipe(clean()),
        gulp.src(['./app/assets/sass/**/*.scss'], {base: './app/assets/sass/'}).pipe(sass()).pipe(gulp.dest('./app/assets/css'))
    );
});

gulp.task('uglify', function () {
    var files = []; // array of files
    return q.fcall(function () {
        return gulp.src(files, { base: './' }).pipe(sourcemaps.init())
            .pipe(sourcemaps.write('./', { addComment: false }))
            .pipe(gulp.dest('./'));
    }).then(function (source) {
        return gulp.src(files, { base: './' }).pipe(uglify())
            .pipe(rename({ suffix: '.min', extname: '.js' }))
            .pipe(gulp.dest('./'));
    });
});

gulp.task('inject', function () {
    var files = gulp.src([
        './app/assets/libs/animate.css/animate.css',
        './app/assets/libs/owl.carousel/assets/owl.carousel.css',
        './app/assets/libs/owl.carousel/assets/owl.theme.default.min.css',
        './app/assets/libs/simple-line-icons/css/simple-line-icons.css',
        './app/assets/libs/font-awesome/css/font-awesome.min.css',
        './app/assets/libs/uniform/themes/default/css/uniform.default.min.css',
        './app/assets/libs/bootstrap/less/bootstrap.less',
        './app/assets/libs/kendo/styles/kendo.common-bootstrap.min.css',
        './app/assets/libs/kendo/styles/kendo.common.min.css',

        './app/assets/css/spinner.css',

        './app/assets/libs/jquery/jquery.js',
        './app/assets/libs/angular/angular.js',

        './app/assets/libs/bootstrap/js/bootstrap.js',
        './app/assets/libs/uniform/jquery.uniform.min.js',
        './app/assets/libs/less/less.js',

        './app/assets/libs/angular-ui-router/angular-ui-router.js',
        './app/assets/libs/oclazyload/oclazyload.js',
        './app/assets/libs/angular-translate/angular-translate.js',

        './app/assets/libs/lodash/lodash.js',
        './app/assets/libs/moment/moment.js',

        './app/assets/libs/jquery-slimscroll/jquery-slimscroll.min.js',
        './app/assets/libs/jquery.countdown/jquery.countdown.js',
        './app/assets/libs/owl.carousel/owl.carousel.js',
        './app/assets/libs/bootstrap-hover-dropdown/bootstrap-hover-dropdown.js',
        './app/assets/libs/kendo/js/kendo.all.min.js',

        './app/app.module.js',
        './app/app.config.js',
        './app/app.directive.js',
        './app/app.routes.js'
    ], { read: false });
    return gulp.src('./app/index.html').pipe(inject(files)).pipe(gulp.dest('./app/'));
});
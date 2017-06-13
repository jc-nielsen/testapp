const gulp = require('gulp');
const concat = require('gulp-concat');
const del = require('del');
const babel = require('gulp-babel');
const runSequence = require('run-sequence');
const bump = require('gulp-bump');
const pkg = require('./package.json');

const paths = {
  buildDir: './build',

  deps: {
    d3plusText: './assets/d3plus-text/d3plus-text.full.js',
    format: './assets/xlsx/numberFormatter.js'
  },

  charts: {
    src: [
      `./src/utils.js`,
      `./src/d3CustomUtils.js`,
      `./src/factory.js`,
      `./src/extension.factory.js`,
      `./src/extension.utils.js`,
      `./src/module.factory.js`
    ]
  }
};

const files = {
  target: `${pkg.name}.js`,
  targetMin: `${pkg.name}.min.js`
};

gulp.task('clean', () => {
  del([`${paths.buildDir}/*.js`]);
});

gulp.task('buildDeps', () => {
  let src = [];
  for (let depName of Object.keys(paths.deps)) {
    let dep = paths.deps[depName];
    src.push(dep);
  }

  return gulp.src(src)
    .pipe(concat('deps.tmp.js'))
    .pipe(gulp.dest(paths.buildDir));
});

gulp.task('buildSrcDev', () => {
  return gulp.src(paths.charts.src)
    .pipe(concat('src.tmp.js'))
    .pipe(gulp.dest(paths.buildDir));
});

gulp.task('buildSrcProd', () => {
  return gulp.src(paths.charts.src)
    .pipe(concat('src.tmp.js'))
    .pipe(babel({ presets: ['es2015'], compact: false }))
    .pipe(gulp.dest(paths.buildDir));
});

gulp.task('buildLib', () => {
  return gulp.src(`${paths.buildDir}/*.tmp.js`)
    .pipe(concat(files.target))
    .pipe(gulp.dest(paths.buildDir));
});

gulp.task('default', (cb) => {
  runSequence('clean', 'buildDeps', 'buildSrcDev', 'buildLib', 'watch', cb);
});

gulp.task('watch', () => {
  gulp.watch(paths.charts.src, () => {
    runSequence('clean', 'buildDeps', 'buildSrcDev', 'buildLib');
  });
});

gulp.task('bump-versions', () => {
  gulp.src(['./package.json', './bower.json'])
    .pipe(bump({ type: 'patch' }))
    .pipe(gulp.dest('./'))
});

gulp.task('prod', () => {
  runSequence('clean', 'buildDeps', 'buildSrcProd', 'buildLib', 'bump-versions');
});

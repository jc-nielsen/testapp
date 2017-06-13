const gulp = require('gulp');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const del = require('del');
const babel = require('gulp-babel');
const runSequence = require('run-sequence');
const bump = require('gulp-bump');
const pkg = require('./package.json');

const paths = {
  buildDir: './build',

  deps: {
    babelPolyfill: './node_modules/babel-polyfill/dist/polyfill.min.js',
    d3SelectionMulti: './node_modules/d3-selection-multi/build/d3-selection-multi.min.js',
    nvd3Extender: `../nvd3-extender/build/nvd3-extender.js`,
    chartsAngularJS: `../charts-angularJS/build/charts-angularJS.js`,
  },

  charts: {
    src: [
      //modules
      `./src/modules/nesting/nesting.module.js`,

      './src/modules/table/table.module.js',
      './src/modules/table/constants.js',
      './src/modules/table/data.js',
      './src/modules/table/data-formatter.js',
      './src/modules/table/cell.js',
      './src/modules/table/table.js',

      './src/modules/average/average.module.js',

      './src/modules/labels/labels.module.js',

      './src/modules/top-labels/top-labels.module.js',

      './src/modules/horizontal-labels/horizontal-labels.module.js',

      './src/modules/format/format.module.js',

      './src/modules/format/numberFormat.module.js',

      './src/modules/wrapper/wrapper.module.js',

      './src/modules/title/title.module.js',

      //extensions
      `./src/extensions/discreteBarChartWithTable/discreteBarChartWithTable.js`,
      `./src/extensions/discreteBarChartWithTable/discreteBarChartWithTable.old.js`,

      `./src/extensions/multiBarHorizontalChartWithAvg/**/*.js`,

      `./src/extensions/multibarVerticalChart/**/*.js`,

      `./src/extensions/multiBarChartWithNesting/**/*.js`,

      './src/extensions/multiBarChart/**/*.js',

      './src/extensions/multiBarHorizontalChart/**/*.js',

      './src/extensions/multiChart/**/*.js',

      './src/extensions/waterfall/**/*.js'
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
    .pipe(babel({presets: ['es2015'], compact: false}))
    .pipe(gulp.dest(paths.buildDir));
});

gulp.task('buildLib', () => {
  return gulp.src(`${paths.buildDir}/*.tmp.js`)
    .pipe(concat(files.target))
    .pipe(gulp.dest(paths.buildDir));
});

gulp.task('minify', () => {
  return gulp.src(`${paths.buildDir}/${files.target}`)
    .pipe(rename(files.targetMin))
    .pipe(uglify())
    .pipe(gulp.dest(paths.buildDir));
});

gulp.task('default', (cb) => {
  runSequence('clean', 'buildDeps', 'buildSrcDev', 'buildLib', 'watch', cb);
});

gulp.task('watch', () => {
  gulp.watch([paths.charts.src, paths.deps.nvd3Extender], () => {
    runSequence('clean', 'buildDeps', 'buildSrcDev', 'buildLib');
  });
});

gulp.task('bump-versions', () => {
  gulp.src(['./package.json', './bower.json'])
    .pipe(bump({type: 'patch'}))
    .pipe(gulp.dest('./'))
});

gulp.task('prod', (cb) => {
  runSequence('clean', 'buildDeps', 'buildSrcProd', 'buildLib', 'minify', 'bump-versions', cb);
});

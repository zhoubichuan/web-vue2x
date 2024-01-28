// import imgmin from 'gulp-imagemin'// 压缩图片
let gulp = require('gulp');
let { VueLoaderPlugin } = require('vue-loader')
let clean = require('gulp-clean'); // 打包之前，先清空原来的文件
let gulpRemoveHtml = require('gulp-remove-html'); // 标签清除
let removeEmptyLines = require('gulp-remove-empty-lines'); // 清除空白行
let htmlmin = require('gulp-htmlmin'); // html压缩组件
let minifycss = require('gulp-minify-css'); // 压缩CSS为一行
// const sass = require('gulp-sass')(require('sass'));
// const autoprefixer = require('gulp-autoprefixer')
let uglify = require('gulp-uglify'); // 获取 uglify 模块（用于压缩 JS）
let babel = require('gulp-babel'); // 将ES6编译成ES5
let distBasePath = 'lib/'; //构建输出的目录
let comPath = 'components/'

//删除dist文件
gulp.task('task1-clean', function () {
  return gulp.src('lib', { allowEmpty: true }) //src 匹配文件
    .pipe(clean()); //清除dist目录
});

//html压缩
gulp.task('task2-html', function () {
  let options = {
    removeComments: true, //清除HTML注释
    collapseWhitespace: true, //压缩HTML
    collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
    minifyJS: true, //压缩页面JS
    minifyCSS: true //压缩页面CSS
  };
  return gulp.src(comPath + '**/*.html')
    .pipe(gulpRemoveHtml()) //清除特定标签
    .pipe(removeEmptyLines({
      removeComments: true
    })) //清除空白行
    .pipe(htmlmin(options))
    .pipe(gulp.dest(distBasePath));
})

// 压缩 css 文件
gulp.task('task3-css', function () {
  return gulp.src([comPath + '**/*.css'])
    .pipe(minifycss())
    .pipe(gulp.dest(distBasePath + 'css'));
})


//压缩js
gulp.task('task4-js', function () {
  return gulp.src([comPath + '**/*.js'])
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest(distBasePath));
})

// 压缩图片
gulp.task('task5-image', function () {
  return gulp.src([comPath + 'img/**/*'])
    // .pipe(imgmin())
    .pipe(gulp.dest(distBasePath + 'img'))
})

gulp.task("task6-scss", async function () {
  return gulp.src(comPath + "/**/*.scss")
    // .pipe(sass())
    .pipe(minifycss())
    .pipe(gulp.dest(distBasePath))
})

// 三方库复制
gulp.task('task7-copy', function () {
  return gulp.src([
    comPath + '**/*.vue',
    // comPath + '**/*.scss',
    comPath + '**/*.json',
    comPath + '**/*.md',
    // comPath+'**/*.js'
  ])
    // .pipe(imgmin())
    .pipe(gulp.dest(distBasePath))
})
// gulp.task('task8-fixer', async () => {
//   gulp.src(comPath + "/**/*.css")
//     .pipe(autoprefixer({
//       browsers: ['last 2 versions'],
//       cascade: false
//     }))
//     .pipe(gulp.dest(distBasePath))
// });

gulp.task('default', gulp.series(
  'task1-clean',
  // 'task2-html',
  // 'task3-css',
  'task4-js',
  // 'task5-image',
  // 'task6-scss',
  'task7-copy',
  // 'task8-fixer'
)
)

//导入gulp模块
const gulp = require('gulp')
const cssmin = require('gulp-cssmin');// 压缩css的包
const rename = require('gulp-rename');//文件重命名
const autoprefixer = require('gulp-autoprefixer');//给css属性加前缀 
const uglify = require('gulp-uglify');// 压缩js的模块
const babel = require('gulp-babel');//es6转es5
const htmlmin = require('gulp-htmlmin');// 压缩html的模块
const webserver = require('gulp-webserver');// 开启服务器的模块，是一个函数
const del = require('del');// 删除文件夹的模块
//移动images文件夹的方法
function imgHandler(){
    return gulp.src('./images/**')  //images文件夹下的所有文件
    .pipe(gulp.dest('./dist/images'))
}


// 移动lib文件夹的方法
function libHandler(){
    return gulp.src('./lib/**')
    .pipe(gulp.dest('./dist/lib'))
}


//压缩并移动css文件夹的方法
function cssHandler(){
    return gulp.src('./css/*.css')  //找到文件
    .pipe(autoprefixer()) //加前缀
    .pipe(cssmin())  //压缩
    // 在看cssmin文档的时候，发现了一个重命名的模块，尝试使用下:下载 导入 使用
    // .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/css'))  //移动
}

//压缩并移动js文件夹的方法
function jsHandler(){
    return gulp.src('./js/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    })) // 把es6转es5
    .pipe(uglify())   // 压缩
    // .pipe(rename({suffix: '.min'}))   // 重命名
    .pipe(gulp.dest('./dist/js'))   // 移动
}

//压缩并移动html文件的方法
function htmlHandler(){
    return gulp.src('./pages/*.html') 
    .pipe(htmlmin({
        collapseWhitespace:true,  // 压缩所有空格，变成一行
        removeAttributeQuotes:true, //去除html属性值的引号
        minifyCSS:true, // 把html文件里面的style标签里面的压缩
        minifyJS:true,  // 把html文件里面的script标签里面的压缩
        collapseBooleanAttributes:true,//把值为布尔值的属性简写
        removeComments:true // 移除注释
    })) //压缩
    .pipe(gulp.dest('./dist/pages')) //移动
}

//开启静态服务器的任务
function serverHandler(){
    return gulp.src('./dist') //找到要开启服务的跟目录
    .pipe(webserver({ // 需要一些配置项
        port:8080,//端口号
        open:'./pages/index.html',//输入ip自动打卡的页面
        livereload:true,//自动刷新浏览器，热启动
    }))
}

//删除dist目录
function delHandler(){
    return del(['./dist'])
}

// 8 自动监控文件
function watchHanlder(){
    gulp.watch('./css/*.css',cssHandler);
    gulp.watch('./js/*.js',jsHandler);
    gulp.watch('./pages/*.html',htmlHandler);
    gulp.watch('./lib/**',libHandler);
    gulp.watch('./images/**',imgHandler);
}

// 整合
module.exports.default = gulp.series(
    delHandler,
    gulp.parallel(htmlHandler,jsHandler,cssHandler,imgHandler,libHandler),
    serverHandler,
    watchHanlder
)
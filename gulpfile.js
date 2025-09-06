const { src, dest, watch, series } = require('gulp')
const sass = require('sass')
const gulpSass = require('gulp-sass')(sass)
const purgecss = require('gulp-purgecss')

const buildSass = () => {
    return src('src/app/Sass/*.scss')
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(purgecss({ content: ['src/app/**/*.jsx'] }))
        .pipe(dest('src/app/css'))
}

const watchSass = () => {
    watch(['src/app/Sass/*.scss', 'src/app/**/*.jsx'], buildSass)
}

exports.default = series(buildSass, watchSass)
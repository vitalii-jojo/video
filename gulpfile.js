const { src, dest, watch, parallel } = require("gulp");

const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");

function styles() {
  return (
    src("data/styles/*.scss")
      .pipe(
        autoprefixer({
          overrideBrowserlist: ["last 3 version"],
        })
      )
      .pipe(concat("style.min.css"))
      .pipe(scss({ outputStyle: "compressed" }))
      // expanded - полностью развёрнутый CSS;
      // nested - показывает вложенность (по умолчанию);
      // compact - каждый селектор на новой строке;
      // compressed - всё в одну строку.
      .pipe(dest("app/css"))
      .pipe(browserSync.stream())
  );
}

function scripts() {
  return src("data/js/*.js")
    .pipe(concat("script.min.js"))
    .pipe(uglify())
    .pipe(dest("app/js-min"))
    .pipe(browserSync.stream());
}

function watching() {
  watch(["data/styles/*.scss"], styles);
  watch(["data/styles/main/*.scss"], styles);
  watch(["data/js/*.js"], scripts);
  watch(["./*.html"]).on("change", browserSync.reload);
}

function browsersync() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
}

exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.browsersync = browsersync;

exports.default = parallel(styles, scripts, browsersync, watching);

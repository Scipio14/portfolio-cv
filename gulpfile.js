const gulp = require("gulp");
const markdown = require("gulp-markdown");
const browserSync = require("browser-sync");

async function md() {
  await gulp
    .src("./blog/md/**/*.md")
    .pipe(markdown())
    .pipe(gulp.dest("./blog/articles"));
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
    port: 4000,
  });
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./css/**/*.css").on("change", browserSync.reload);
  gulp.watch("./js/**/*.js").on("change", browserSync.reload);
}
exports.watch = watch;
exports.md = md;

const gulp = require("gulp");
const browserSync = require("browser-sync");

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

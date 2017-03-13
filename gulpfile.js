var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");

var javascriptFiles = [
	"./shoppinglist-config.js",
	"./shoppinglist-service.js",
	"./shoppinglist-controller.js",
	"./home-controller.js",
];

gulp.task("bundle", function() {
	return gulp.src(javascriptFiles)
	.pipe(concat("bundle.js"))
	.pipe(uglify())
	.pipe(gulp.dest("./dist"));
});

gulp.task("default", ["bundle"]);
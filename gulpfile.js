const gulp = require('gulp')

// import search index tasks
require('hugo-search-index/gulp')(gulp)

gulp.task('default', gulp.series(function(done) {
    // task code here
    done();
}));
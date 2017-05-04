# gulp-prepack

[![NPM version](https://img.shields.io/npm/v/gulp-prepack.svg)](https://www.npmjs.com/package/gulp-prepack)
[![Build Status](https://travis-ci.org/smildlzj/gulp-prepack.svg?branch=master)](https://travis-ci.org/smildlzj/gulp-prepack)
[![Coveralls](https://img.shields.io/coveralls/smildlzj/gulp-prepack.svg?style=flat-square)](https://github.com/smildlzj/gulp-prepack)

A gulp plugin for [prepack](https://prepack.io/).

## Usage


First, install `gulp-prepack` as a development dependency:

```shell
npm install --save-dev gulp-prepack
```

Then, add it to your `gulpfile.js`:

```javascript
var prepack = require('gulp-prepack');

gulp.task('default', function(){
  gulp.src('*.js')
    .pipe(prepack({
      // prepack options , more https://prepack.io/getting-started.html
    }))
    .pipe(gulp.dest('build'));
});
```


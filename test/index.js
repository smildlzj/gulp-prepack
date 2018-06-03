'use strict';
var test = require('ava');
var gutil = require('gulp-util');
var plugin = require('../index');

test.cb('should prepack', function (t) {
  var stream = plugin();

  stream.on('data', function (file) {
    t.is(file.relative, 'test.js');
    t.is(
        file.contents.toString(),
`(function () {
  var _$0 = this;

  _$0.s = "hello world";
}).call(this);`
    );
    t.end();
  });

  stream.write(new gutil.File({
    path: 'test.js',
    contents: new Buffer(
`(function () {
  function hello() { return "hello"; }
  function world() { return "world"; }
  global.s = hello() + " " + world();
})();`)
  }));
});

'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var plugin = require('../index');

it('should prepack', function (cb) {
  var stream = plugin();

  stream.on('data', function (file) {
    assert.equal(file.relative, 'test.js');
    assert.equal(file.contents.toString(), 's = "hello world";');
    cb();
  });

  stream.write(new gutil.File({
    path: 'test.js',
    contents: new Buffer('(function () {  function hello() { return \'hello\'; }  function world() { return \'world\'; }  global.s = hello() + \' \' + world();})();')
  }));
});
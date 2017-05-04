var through2 = require('through2');
var gutil = require('gulp-util');
var Parser = require('./libs/parser');

module.exports = function(options){
  options = options || {};
  
  var stream = through2.obj(function (file, enc, callback) {
    
    if (file.isNull()) {
      // nothing to do
      return callback(null, file);
    }

    var parser = new Parser(file , options);

    if (file.isStream()) {

      file.contents = file.contents.pipe(parser);
      return callback(null , file);
    }

    if (file.isBuffer()) {
      parser.write(file.contents);
      parser.end();

      var contents = new Buffer('');
      parser.on('data', function (data) {
          contents = Buffer.concat([contents, data]);
      });
      parser.once('end', function () {
          file.contents = contents;
          callback(null, file);
      });
      return;
    }

  });

  return stream;
};
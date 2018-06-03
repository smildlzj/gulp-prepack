'use strict';
var Prepack = require('prepack');

module.exports = function(content , file , options){
  // https://prepack.io/getting-started.html#options
  var prepackedCode = Prepack.prepackSources([
    {
      fileContents: content
    }
  ], options);

  return prepackedCode.code;
};
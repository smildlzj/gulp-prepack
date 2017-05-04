'use strict';
var util = require('util');
var Transform = require('readable-stream/transform');
var packer = require('./packer');

function Parser(file , options) {
    Transform.call(this);

    this.options = options;
    this.file = file;
}
util.inherits(Parser, Transform);

Parser.prototype._transform = function (chunk, enc, done) {
    var content = chunk.toString();

    done(null, packer(content , this.file , this.options));
};

module.exports = Parser;
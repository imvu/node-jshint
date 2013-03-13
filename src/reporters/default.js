"use strict";
var fs = require('fs');

module.exports = {
	reporter: function (results, data, opts) {
		var len = results.length;
		var str = '';
		var prevfile;

		opts = opts || {};

		results.forEach(function (result) {
			var file = result.file;
			var error = result.error;

			if (prevfile && prevfile !== file) {
				str += "\n";
			}
			prevfile = file;

			str += file  + ': line ' + error.line + ', col ' +
				error.character + ', ' + error.reason;

			if (opts.verbose) {
				str += ' (' + error.code + ')';
			}

			str += '\n';
		});

		if (str) {
			fs.writeSync(1, str + "\n" + len + ' error' + ((len === 1) ? '' : 's') + "\n");
		}
	}
};

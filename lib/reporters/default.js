var fs = require('fs');

module.exports = {
    reporter: function (results, data) {
        var len = results.length,
            str = '',
            file, error;

        results.forEach(function (result) {
            file = result.file;
            error = result.error;
            str += file  + ': line ' + error.line + ', col ' +
                error.character + ', ' + error.reason + '\n';
        });

        if (str) {
            fs.writeSync(1, str + "\n" + len + ' error' + ((len === 1) ? '' : 's') + "\n");
        }
    }
};

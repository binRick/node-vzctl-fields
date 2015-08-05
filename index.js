var child = require('child_process'),
    _ = require('underscore'),
    trim = require('trim'),
    pj = require('prettyjson'),
    c = require('chalk');


child.execSync = child.execSync || require('exec-sync');


module.exports.listFields = function(Options, _cb) {

    var cmd = '/usr/sbin/vzlist -L|tr -s \' \' | cut -d\' \' -f 1,2';
    if (Options.preCmd)
        cmd = Options.preCmd + ' \"' + cmd + '\"';
if(Options.debug)
    console.log(c.red.bgWhite('Running Command'), c.green.bgBlack(cmd));
    var options = child.execSync(cmd).toString().split('\n').filter(function(s) {
        return String(s).length > 0;
    }).map(function(s) {
        return {
            lowerCase: s.split(' ')[0],
            upperCase: s.split(' ')[1],

        };
    });
if(Options.debug)
    console.log(pj.render(options));

    _cb(null, options);
};

#!/usr/bin/env node

var VZ = require('./');

VZ.arcStatFields({
    debug: false,
//    preCmd: 'ssh beo ssh crux'
}, function(e, Fields) {
    if (e) throw e;
    console.log(Fields);
    VZ.listFields({
        debug: false,
//        preCmd: 'ssh beo ssh crux'
    }, function(e, Fields) {
        if (e) throw e;
        console.log(Fields);
    });
});

#! /usr/bin/env node

var path = require('path');

var list = process.argv.slice(2);

list.forEach(function(item, index) {
    console.log(path.resolve(item));
});

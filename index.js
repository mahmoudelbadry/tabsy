#!/usr/bin/env node
var program = require('commander');
var pjson = require('./package.json');
var FirefoxClient = require('firefox-client');
var fs = require('fs');
var lazy = require('lazy');
var home = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];

program
    .version(pjson.version)
    .option('-f, --file [file]', 'use another file as the links file' , home + '/links.txt')
    .option('-p, --port [port]', 'listen for Firefox on another port', 6000)
    .parse(process.argv);

var existingLinks = [];

if(fs.existsSync(program.file)) {
    lazy(fs.createReadStream(program.file))
        .lines.forEach(function(line) {
            existingLinks.push(line.toString());
        });
}

var fxclient = new FirefoxClient();
fxclient.connect(program.port , storeTabs);


function storeTabs(err) {
    if(err) throw err;
    fxclient.listTabs(function(err, tabs) {
        tabs.forEach(function(tab) {
            if(existingLinks.indexOf(tab.url) == -1 && tab.url.indexOf('about:') != 0) { 
                fs.appendFile(program.file, tab.url + "\n", function(err) {
                    if(err) throw err;
                });
            }
        });
        fxclient.disconnect();
    });
}

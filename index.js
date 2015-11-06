var natural = require('natural');
var path = require('path');
var fs = require('fs');

function analyzeFile(callback, err, data) {
    var results = {};

    return callback(err, results);
}
function analyze(filename, callback) {
    fs.readFile(path.resolve(__dirname, filename), analyzeFile.bind(null, callback));
}

analyze('sources/text_en_The-Yellow-Wallpaper.txt', function(err, data) {
    console.log(err, data);
});

// Read .dict files and return an object with introspection methods.

var fs = require('fs');

function readDict(path, callback) {
    var store = {};
    fs.readFile(path, 'utf-8', parseReadFile.bind(null, store, callback));
    return store;
}
function parseReadFile(store, callback, err, data) {
    if (err) throw err;

    store.raw = data;

    // Entries are double-space separated
    store.dict = data.split('\n\n').map(formatEntry);

    if (typeof callback === 'function') callback(err, store.dict);
}
function formatEntry(entry) {
    var parts = entry.split('\n');
    var headword = parts.shift();

    // Extract pronunciation guide
    var ipaMatch = headword.match(/\[([^\]]+)\]/);
    var pronunciation = null;
    if (ipaMatch && ipaMatch.index && ipaMatch[1]) {
        headword = headword.slice(0, ipaMatch.index).trim();
        pronunciation = ipaMatch[1];
    }
    return {
        headword: headword,
        pronunciation: pronunciation,
        // Translations are newline separated
        translations: parts.map(function(translation) {
            if (typeof translation === 'string') {
                return translation.trim();
            } else {
                console.error('problem with headword', headword);
                return null;
            }
        })
    };
}

module.exports = readDict;

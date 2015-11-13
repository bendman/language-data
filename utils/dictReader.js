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

    store.dict = data.split('\n\n').map(formatDefinition)

    if (typeof callback === 'function') callback(store);
}

readDict('./dict/fr-en.dict');

module.exports = readDict;

# Lexify Utilities
*(in progress)*

## DictReader
Read a dictionary from a `.dict` file and provide access to the parsed entries.

### Signature

```
dictReader(
  String filename,
  Function callback(err, data)
)
```

### Example

```javascript
var dictReader = require('language-data/utils/dictReader');

function dictCallback(err, dict) {
  // Find an entry by headword (example)
  var fromage = dict.filter(function(entry) {
    return entry.headword === 'fromage';
  }));

  console.log(fromage);
  // [ {
  //     headword: 'fromage',
  //     pronounciation: 'fromaʒ',
  //     translations: [ 'cheese' ]
  // } ]
}

dictReader('some-fr-en-dictionary.dict', dictCallback);
```

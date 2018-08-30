var words = ["ground", "control", "to", "major", "tom"];

function myMap(input, cb) {
  var result = [];
  for (var i = 0; i < input.length; i++) {
    result.push(cb(input[i]));
  }
  return result;
}


var test = myMap(words, function(word) {
  return word.length;
});

console.log(test);

var test = myMap(words, function(word) {
  return word.toUpperCase();
});

console.log(test);

var test = myMap(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(test);
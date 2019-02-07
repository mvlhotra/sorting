
function map(data,callBack){
    var newArray = [];
    data.forEach(function(item){
        newArray.push(callBack(item));
    });
    console.log(newArray);
};

var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});


/*
function iterativeLog(array) {
  array.forEach(function(element, index, array) {
    console.log(`${index}: ${element}`);
  })
}*/

function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback) {
  var array = ["LeBron", "Irving", "Thompson", "Love", "Smith"];
  array.forEach(callback)
  return array;
}

function doToArray(array, callback) {
  array.forEach(callback);
}

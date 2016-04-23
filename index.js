function sumAll(arr) {
  var temp = [];
  var longNum = Math.max.apply(null, arr);
  var shortNum = Math.min.apply(null, arr);
  
  for(var i = shortNum ; i <= longNum; i++) {
      temp.push(i);
  } 
  return temp.reduce(function(a, b) { return a + b;});
}
sumAll([1, 4]);

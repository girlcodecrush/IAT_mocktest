/*
"_.reduce" 메소드를 작성합니다.

underbar의 기능 중 하나인, reduce 메소드를 작성합니다.
underbar의 _.each 메소드는 사용할 수 없으며 직접 구현하여 사용하실 수는 있습니다.

Reduce 메소드는 각 항목의 iterator(accumulator, item)를 반복적으로 호출하여 배열 또는 객체를 
단일 값(single value)으로 줄입니다. accumulator는 이전 iterator 호출에서 반환된 값이어야 한다.

accumulator의 시작 값을 reduce의 세 번째 argument로 전달할 수 있습니다. 
시작 값이 전달되지 않으면 첫 번째 element가 accumulator로 사용되고, 절대 iterator에게 
전달되지 않습니다. 즉, 시작 값이 전달되지 않은 경우 첫 번째 element가 
두 번째 argument로 지정될 때까지 iterator가 호출되지 않습니다.

Example:
var numbers = [1,2,3];
var sum = _.reduce(numbers, function(total, number){
     return total + number;
       }, 0); // should be 6

var identity = _.reduce([5], function(total, number){
  return total + number * number;
  }); // should be 5, regardless of the iterator function passed in
        No accumulator is given so the first element is used.
*/

var _ = {};
_.reduce = function(collection, iterator, accumulator) {
  // your code here
  if(Array.isArray(collection)){
    if(accumulator === undefined){
      accumulator = collection[0];
      for(var i = 1 ; i < collection.length ; i++){
        accumulator = iterator(accumulator, collection[i], i, collection);
      }
    }else {
      for(var j = 0 ; j < collection.length ; j++){
        accumulator = iterator(accumulator, collection[j], j, collection);
      }
    }
    return accumulator; 
  }else if(typeof collection === 'object'){
    for(var key in collection){
      accumulator = iterator(accumulator, collection[key], key, collection);
    }
  }
  return accumulator; 
};

// keep this code for testing
if(typeof window === 'undefined') {
  module.exports = _;
}
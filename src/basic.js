/*
"extend" 함수를 작성합니다.

두 개의 객체가 주어진 경우 "extend" 함수는 두 번째 객체의 속성을 첫 번째 객체로 추가합니다.

주의:
* 첫 번째 객체에 없는 키를 추가합니다.
* 첫 번째 개체에 이미 지정된 키가 있는 경우 무시하십시오(속성 값을 덮어쓰지 않음).
* 두 번째 객체는 절대 수정하지 마십시오.

ex) 
var obj1 = {
  a: 1,
  b: 2
};
var obj2 = {
  b: 4,
  c: 3
};

extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}
*/

function extend(obj1, obj2) {
  // your code here
  
}


// keep this code for testing
if(typeof window === 'undefined') {
  module.exports = extend;
}

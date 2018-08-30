/*
"calculator.fib" 메소드를 작성합니다.

피보나치 수는 F(0) = 0, F(1) = 1일 때, 2 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 점화식입니다.
2 이상의 n이 입력되었을 때, fib 함수를 제작하여 n번째 피보나치 수를 반환해 주세요.
예를 들어 n = 3이라면 2를 반환해주면 됩니다.

Notes:
* recursion을 사용할 때, fib 함수 안에서 calculator.fib 를 호출해야 합니다.
* recursion과 memoize 기법을 사용하여 fib 함수를 작성하세요.
* 스펙러너에서는 fib 함수를 맞게 작성했는지 판단하지 않습니다. 브라우저에서 fib(50), fib(100)을 
  빠르게 계산할 수 있다면 통과입니다. 
* tip : memoize를 위한 배열 혹은 객체는 전역변수로 만드시면 됩니다.

var output = calculator.fib(10);
console.log(output); // --> 55;
*/

// your code here

var calculator = {
  fib : function fib(n) {
  var cache = {};
    if(n < 2){
      return n; 
    }else{
      var saved1 = fib(n-1);
      var saved2 = fib(n-2);
      var result = saved1 + saved2 ; 
      cache[n] = result; 
    }
    return result;  
  } 
   
};
fib(n);


// keep this code for testing
if(typeof window === 'undefined') {
  module.exports = calculator;
}
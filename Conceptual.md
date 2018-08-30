## this의 5가지 binding patterns를 서술하시오.
 1. log()의 경우, this는 글로벌 객체를 가리킴
 2. function invocation의 경우, this는 글로벌 객체를 가리킴 
 3. call & apply에 함수를 사용할 경우, 주어진 첫 번쨰 인자를 가리킴 
 4. method invocation의 경우, this는 부모객체를 가리킴
 5. 새로운 클래스를 construct하는 경우, 그 instance 객체를 가리킴 


## scope, closure의 개념을 정리해보세요.
 scope은 함수와 그에 따라가는 인자나 매개변수가 정의내려져있는 영역으로 지역변수가 이용되는 범위로 외부함수의 변수가 접근할 수 없는 범위이다
 closure는 내부함수의 변수가 외부함수의 변수에 접근할 수 있는 범위로, 외부함수에 의해 내부함수가 콜되고, 외부함수의 실행이 끝난 이후에도 내부함수는 여전히 lexical scope에 있는 외부함수의 변수에 접근할 수 있는 것이 클로져이다.
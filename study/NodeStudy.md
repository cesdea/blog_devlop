# Node.js

 개발에 사용되는 소프트웨어 플랫폼이며 작성 언어로는JavaScript로 브라우저 밖에서 서버를 구축하는 등의 코드를 실행할 수 있게 해주는 런타임 환경이다

--------------------------------------
# 1. JS의 자료형과 JS만의 특성
>js의 변수는 자료형과 관계없이 변수에 값을 저장할 수 있다.이처럼 자료형의 형태는 있지만 타입을 자유롭게 바꿀 수 있는 언어를 느슨한 타입(loosely typed)의 동적(dynamically) 언어라고 합니다.

> JS는 타입에 자유로운 특징을 가지고 있는 만큼 형변환에도 자유로운 모습을 보이는데 이 부분에서 두가지 형태로 나눠질 수 도있다. <br>
>첫 번째는 명시적 형변환으로 작성자가 임의로 형변환시키는 것으로 간단한 예로는 Number("123")정도로 String에서 Number로 형변환시키는 것이다. 이것은 작성자가 의도에 맞게 바꾸는 부분이지만 두 번째 형변환은 그렇지 않다.<br>
> 두번째 형변환은 암시적 형변환으로 작성자가 의도하든 안하든 연산자 사용으로 인한 자연적으로 일어나는 형변환이다.

> 이러한 점에서 비교 연산자에서 같다의 의미를 가지는 연산자도 '==','==='로 두가지가 있는데 
>'=='의 경우에는 암시적인 형변환의 영향으로 타입이 달라도 같다라는 결과가 나올 수 있다. 예를 들면 '123' == 123 의 결과는 true이다.
>'==='의 경우에는 암시적인 형변환을 막아 타입까지 비교하는 연산자로 앞에서 말한 예를 false로 틀렸다고 인식한다.

> 이런 가벼운 타입에 자료형을 가지고 있기 때문에 자유도와 가독성이 좋다는 장점이 있을 수 있지만, 한편으로는 숫자형을 바라고 만드는 코드를 문자형으로 받게 될 수 있는 참사가 있을 수 있기에 많은 주의가 필요로 하게 된다.<br>
> 이를 해결하기 위해서 파악되지 않는 부분의 변수는 상시 명시적 형변환으로 제어하는게 좋을거 같다.

> Null과 undefined는 둘다 자료형이면서 각각 다른 뜻을 담고 있는데 undefined의 경우에는 말그래도 자료형이 undefined이면서 값 또한 undefined라는 값을 가지고 있는 것이다. 즉 암시적 형변환으로 문자형이 될 수 도있다.<bR>
>하지만 null의 경우 undefined와 같이 자료혀이지만 값을 가지지 않는 것이 하나의 값으로 들고 있다. 즉, 값을 넣어도 값을 갖지 않기 때문에 값을 대입해도 비어있는 상태가 된다.

# 2. JS 객체와 불변성
- 기본형 데이터와 참조형 데이터

기본형 데이터, 원시 타입이라고 타입의 값을 그대로 할당하는 데이터를 말한다.  
종류로는
- Number
- String
- Boolean
- Symbol(ES6에 추가, 객체 속성을 만드는 데이터 타입)
- null
- undefined 

정도가 있으며 특징으로는 메모리상에 고정된 크기로 저장되며 원시 데이터 값 자체를 보관하므로, 불변적이다.<br>

참조형 데이터는 참조 타입의 데이터는 크기가 정해져 있지 않고 변수에 할당이 될 때 값이 직접 해당 변수에 저장될 수 없으며 변수에는 데이터에 대한 참조만 저장되는데 이런 데이터를 참조형 데이터라고 한다.

특징은 변수의 값이 저장된 힙 메모리의 주소값을 저장한다. 따라서 변수의 접근은 메모리의 주소값을 통해서 값을 보게된다.

이러한 특징을 가지는 타입은 Object이다.

`var x = { count : 100 };`

`var y = x;`

`x.count = 99;`

`console.log(y);	// 99 `

위와 같이 참조데이터는 메모리 값을 들고 오기때문에 참조하고 있는 데이터가 바뀌면 참조를 한 데이터 또한 바뀌게 된다.

이런 참조하는 데이터에 따라 바뀌는 데이터들을 고정시킬 수 없을까?라고 의문을 가지게 되는데 그에 대한 방법이 2가지가 있다.

1. 객체의 방어적 복사(defensive copy)
2. 불변객체화를 통한 객체 변경 방지

첫번째으 객체의 방어적 복사는 얕은 복사와 깊은 복사에 대해 알아야하는데 일단 얕은 복사의 경우에는 주소를 복사하여 같은 곳을 참조하게 되는 복사이며, 깊은 복사의 경우에는 새로운 객체에 참조되는 데이터를 복사, 붙여넣기를 하는 것이다.

일단 얕은 복사의 경우에는 참조값이 바뀌면 참조되는 데이터들이 바뀌는 문제가 생기고 깊은 복사의 경우에는 참조되는 객체와는 전혀 다른 객체가 되기 때문에 독립적이게 된다. 

```
const user1 = {
  name: 'Lee',
  address: {
    city: 'Seoul'
  }
};
// 새로운 빈 객체에 user1을 copy한다.
const user2 = Object.assign({}, user1);
// user1과 user2는 참조값이 다르다.
console.log(user1 === user2); // false
user2.name = 'Kim';
console.log(user1.name); // Lee
console.log(user2.name); // Kim
//객체 내부의 객체(Nested Object)는 Shallow copy된다.
console.log(user1.address === user2.address); // true
user1.address.city = 'Busan';
console.log(user1.address.city); // Busan
console.log(user2.address.city); // Busan
```
다시 본론으로 가 위와 같이 object.assign() 수행하여 객체를 복사하는데 참조값은 다르나 객체 내부의 객체는 얕은 복사가 되기 때문에 다른 참조가 바뀐다고 안 바뀌지만 값자체는 불변은 아니기에 바꿀 수 있다.

또 다른 방법으로는 Object.freeze()를 사용하면 불변을 만들 수 있는데 
```
function deepFreeze(obj) {
  const props = Object.getOwnPropertyNames(obj);
  props.forEach((name) => {
    const prop = obj[name];
    if(typeof prop === 'object' && prop !== null) {
      deepFreeze(prop);
    }
  });
  return Object.freeze(obj);
}
const user = {
  name: 'Lee',
  address: {
    city: 'Seoul'  }`};`deepFreeze(user);`user.name ='Kim';           // 무시된다`user.address.city ='Busan'; // 무시된다``console.log(user); // {name: 'Lee', address: { city: Seoul' } }
```
위와 같이 deepFreeze(user)를 사용하여 변수의 변경을 막았다.

# 3. 호이스팅과 TDZ
호이스팅은 메모리 공간에 선언 전에 미리 할당되어지는 것을 이야기하는데 이 같은 현상은 var으로 선언했을때 일어난다.
하지만 일어나지 않는 선언도 있는데 let, const 이다.

let, const는 선언을 했을시 TDZ(Temporal Dead Zone)이라는 공간이 생기며 그 공간 안에서는 let, const로 선언한 변수를 사용시 오류가 걸리고 그 오류는 ReferenceError라는 오류에 빠진다.

이를 해결하는 방법은 let,const의 선언 후에 변수를  사용하거나 var로 호이스팅을 사용하여 변수 선언전에 할당을 주는 방법으로 해결할 수 있다. 하지만 var의 경우 최상단의 기준이 함수를 기준으로 되기 때문에 문제가 생길 수도 있다.

예를 들면
```
var n = 1;
function test() {
  console.log(n);
  var n = 2;
  console.log(n);
}
test();
```
위의 코드의 결과는 어떻게 나올까? 라 하면 결론부터 
```
undefined
2
```
라고 나온다. 1을 분명 선언을 하고 함수를 실행했는데 오류가 걸리는 이유는 아래의 코드로 설명이 가능하다.


```
var n = 1;
function test() {
  var n; // hosting
  console.log(n);
  n = 2;
  console.log(n);
}
test();
```
var의 호이스팅으로 미리 할당되는 위치를 보이는 것인데 이때 var n=2가 함수의 최상단에서 선언을 만들게 되는데 이때 초기화가 안되기 때문에 값이 없어서 undefined를 출력하게 되는 것이다.

이런 식으로 호이스팅을 이용하여 선언에서 자유로워지는 변수도 있을 수 있지만 최대한 표현을 피하는 것이 좋다.

 변수로 호이스팅을 사용했다면 호이스팅을 이용하는 함수의 사용법도 있는데
 ```
 foo();

function foo() { // 함수선언문
    console.log("hello");
}
  ```
 이러한 표현방법을 함수 선언문이라고 하고 호이스팅이 발생했을때 실제로 실행되는 코드는
  ```
function foo() { // 함수선언문
    console.log("hello");
}
 foo();
  ```
  이런 식으로 작동된다.

 비슷하게 이처럼 함수를 표현하는 방법이 있는데 이를 함수 표현식이라고 하고 형태는 
 ```
 foo2();
var foo2 = function() { // 함수표현식
    console.log("hello2");
}
 ```
 가 된다. 문제는 이 부분에서도 호이스팅이 일어나는데 문제는 실제로 작동되는 코드에서 있다.
  ```
var foo2;
foo2();
foo2 = function() { // 함수표현식
    console.log("hello2");
}
 ```
 변수와 비슷하게 foo2();호출할때 오류가 걸린다.

 이런 호이스팅의 기준이 되는 범위를 스코프라고 하는데 정확하게 말하면 선언이 영향 주는 범위를 스코프라고 이해했다.
 스코프는 함수를 기준으로 나뉘어지고 각 스코프에서 스코프가 영향을 주는 것을 스코프 체인이라고 불린다.

 스코프 체인은 하나의 스코프에서 코드가 작동되고 그 코드가 찾을 수 없을때 자신보다 상위의 스코프를 탐색하게 되면서 영향을 넓혀간다.
 이때 상위의 스코프에서 찾는다. 그 선억에 영향을 주게되어 하위 스코프에서 상위 스코프에게 영향을 주는 것을 스코프 체인이라 한다.

 스코프를 호출하게 되면 함수 내부에 있는 스코프의 변수가 고정되게 된다. 이 현상을 클로져라고 하며 함수 내부의 변수를 직접적으로 호출할 수 없는데 이것을 변수의 은닉화라고 한다.

이러한 개념은 js,java script의 작동 방식을 생각하게하는데 js의 경우 Execution Context, 실행 컨텍스트라는 곳에서 코드가 실행된다. 

실행 컨텍스트란 코드를 실행하기 위해 필요한 환경
더 자세히 말하자면, 실행할 코드에 제공할 환경 정보들을 모아놓은 객체이다.

실행 컨텍스트는 중요한 실행 컨텐스트는 2가지로 나뉘어지는데 
1.  Global Execution Context
2. Fuction Execution Context

1번의 경우에는 디폴트 실행컨텍스트로 파일이 엔진에 의해 처음 로드되었을때 실행되는 환경이며 2번의 경우에는 함수를 실행하고 실행 후 함수 내부의 코드를  순차적으로 작동하는 환경이다.(함수1>함수2>함수3>...)

일단 우리가 먼저 알아야하는 것은 js는 싱글 스레드 환경이기 때문에 동시에 두 함수가 돌아갈 수 없다. 저장 정지 실행 이 순으로 두 함수를 실행하는 것이다.

따라서 함수를 실행하는데 함수 내부에 함수가 있을 경우 순차적으로 정보를 꺼내야하므로 callstack이라는 것이 있는데 call은 호출, stack의 경우에는 자료 구조의 stack이다. stack의 경우에는 한 곳이 막혀있는 원통을 구상하면 이해하기 좋은데 두가지 값을 넣을때 출구와 입구가 하나이기 때문에 1>2면 2>1이 되는 구조를 가지고 있다. 이런식으로 실행과 환경을 보장을 한다. 

----------------------
# 실습과제
콘솔에 찍힐 b 값을 예상해보고, 어디에서 선언된 “b”가 몇번째 라인에서 호출한 console.log에 찍혔는지, 왜 그런지 설명해보세요.
주석을 풀어보고 오류가 난다면 왜 오류가 나는 지 설명하고 오류를 수정해보세요.

```
let b = 1;
function hi () {
    const a = 1;
    let b = 100;
    b++;
    console.log(a,b);
}
//console.log(a);
console.log(b);
hi();
console.log(b);
```
```
1
1 101
1
```
1. 선언확인 => let으로 확인 됬으니 변수의 호이스팅으로 인한 오류는 없음
2. 함수 내에서 b를 선언을 확인 => 스코프 체인으로 전역스코프에 있는 b에 영향을 못줌 

```
//console.log(a);
```
일단 오류가 걸리는데 그 이유는 a가 선언되지 않았기 때문이다.
함수 hi()내의 변수는 전역스코프로 영향을 주지는 못하기 때문이다.

------------------------
### 참고자료
자료형
>https://ko.javascript.info/types
>
>https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures
>
>https://www.secmem.org/blog/2020/03/19/javascript-type-coercion/ 
>
> => 원본 https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/

객체와 불변성
> https://poiemaweb.com/js-immutability
>
> https://hanamon.kr/javascript-shallow-copy-deep-copy/
>
> https://velog.io/@surim014/JavaScript-Primitive-Type-vs-Reference-Type

호이스팅과 TDZ
>https://www.daleseo.com/js-var-issues/
>
> https://ui.toast.com/weekly-pick/ko_20191014?fbclid=IwAR3fiR4wiv8kszL6Fz2KqwHpv-bTL8tNHElRN0q0ky5kpOP5BMqMS0wc-9k
>
> https://developer.mozilla.org/ko/docs/Glossary/Hoisting
>
>https://velog.io/@solseye/JS-%EC%9E%98-%EB%B4%90-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%EC%BD%94%ED%94%84Scope-%EC%8B%B8%EC%9B%80%EC%9D%B4%EB%8B%A4
>
>https://velog.io/@wonseok2877/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%97%94%EC%A7%84-%EC%8B%A4%ED%96%89-%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8%EC%99%80-%EC%BD%9C-%EC%8A%A4%ED%83%9D
>
>https://www.zerocho.com/category/Javascript/post/5740531574288ebc5f2ba97e
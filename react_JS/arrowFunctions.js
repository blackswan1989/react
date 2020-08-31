// TODO ======= #1.0 Arrow Functions =======

//
//

//1)
function sayHello(name) {
  return "Hello" + name;
}

const nicolas = sayHello("Nicolas");

console.log(nicolas);

//* console output = Hello Nicolas
// 1)에서 return이 hello nicolas라는 값을 받아서 반환하였다. 만약 return값이 없어 아무것도 반환하지 않는다면 undefined라고 출력 될 것이다 function이 아무것도 반환하지 않게 되기 때문이다.

//
//
//2)
const sayHello = (name) => "Hello" + name;

const nicolas = sayHello("Nicolas");

console.log(nicolas);

//* console output = Hello Nicolas (1과 동일하게 출력 가능)
// arrow function을 사용 할 때에는 const를 하고 arrow function을 안에 넣어야 한다. 그리고 retrun을 써 넣는 대신에 "=>" 이런 기호를 넣어주어도 된다.
// 또 arrow Function은 return한다는 뜻을 함축하고 있다. 다만 {}(중괄호)를 한다면 그 안 어딘가에서 return하겠다는 것을 의미하게 되므로, {}을 사용하면 그 안에 return의 입력이 추가로 필요해진다.

//
//
//3)
function sayHello(name = "Nicolas") {
  return "Hello" + name;
}

const nicolas = sayHello();

console.log(nicolas);

//* console output = Hello Nicolas
// const nicolas = sayHello()안에 있던 "Nicolas"를 function sayHello(name = "Nicolas")이렇게 바꿨는데도 1)과 동일하게 작동한다 이는 javascript function에서 사용 가능한 새로운 기능이다. (name = "Nicolas") 이곳에 어떤 값도 들어오지 않았을 때를 대비해서, Default값을 넣을 수 있다.

// 아무것도 넣지 않았을 때는 출력값이 "Hello undefined"이기 때문에 name=값을 default으로 human을 입력한다면 "Hello human"이 출력된다. 2)와 같은 arrow function에서도 사용가능하다. 아래4)참조

//4)
const sayHello = (name = "Human") => "Hello " + name;

const nicolas = sayHello();

console.log(nicolas);
//* console output = Hello Human

// 이처럼 arrow function은 가끔씩 이벤트들을 추가하거나, function을 anonymous function으로 만드는데 좋다.
// Anonymous function : 익명 함수는 말 그대로 함수의 이름이 없는 함수로 클로저(Closure) 또는 콜백(Callback) 이라고도 부른다.

//
//
//5-1) arrow function 이벤트 만들기 예제1
const button = document.querySelector("button");

const handleCLick = (event) => console.log(event);
button.addEventListener("click", handleCLick);

//* browser output = click me!!버튼 클릭시 콘솔 출력 됨.

//
//5-2) arrow function 이벤트 만들기 예제2 - arrow function을 통하여 5-1 과 같은 결과를 도출하면서 코드를 더욱 간단하고 보기 좋게 만들 수 있다.
const button = document.querySelector("button");

button.addEventListener("click", (event) => console.log(event));

//* browser output = 5-1과 동일하게 click me!!버튼 클릭시 콘솔 출력 됨.
// 유일한 규칙은 button.addEventListener("click", (event) => 에서 argument가 event처럼 하나라면 ()를 꼭 할 필요는 없다. 하지만 두개 이상이라면 괄호가 필수로 필요하다. 하지만 정확함을 위해 ()를 해주도록 하자.

<br>

# 1.1 Arrow Functions

<br>
<br>

## example 1)

<br>

```
function sayHello(name) 
{
  return "Hello" + name;
}

const nicolas = sayHello("Nicolas");

console.log(nicolas);

// [LOG] Hello Nicolas
```

1)에서 return이 hello nicolas라는 값을 받아서 반환하였다. 만약 return값이 없어 아무것도 반환하지 않는다면 undefined라고 출력 될 것이다 function이 아무것도 반환하지 않게 되기 때문이다.

<br>
<br>

## example 2)

<br>

```
const sayHello = (name) => "Hello" + name;

const nicolas = sayHello("Nicolas");

console.log(nicolas);

// [LOG] Hello Nicolas
```

arrow function을 사용 할 때에는 const를 하고 arrow function을 안에 넣어야 한다. 그리고 retrun을 써 넣는 대신에 "=>" 기호를 넣어주어도 된다. 또 arrow Function은 return 기능을 함축하고 있다. 다만 {}(중괄호)를 한다면 그 안 어딘가에서 return하겠다는 것을 의미하게 되므로, {}을 사용하면 그 안에 return의 입력이 추가로 필요해진다.

<br>
<br>

## example 3)

<br>

```
function sayHello(name = "Nicolas") {
  return "Hello" + name;
}

const nicolas = sayHello();

console.log(nicolas);
// [LOG] Hello Nicolas
```

`const nicolas = sayHello()`안에 있던 `"Nicolas"`를 `function sayHello(name = "Nicolas")`이렇게 바꿨는데도 1)과 동일하게 작동한다 이는 javascript function에서 사용 가능한 새로운 기능이다. `(name = "Nicolas")` 이곳에 어떤 값도 들어오지 않았을 때를 대비해서, Default 값을 넣을 수 있다.

아무것도 넣지 않았을 때는 출력값이 "Hello undefined"이기 때문에 `name=`값을 default으로 human을 입력한다면 "Hello human"이 출력된다. 2)와 같은 arrow function에서도 사용가능하다. 아래4)참조

<br>
<br>

## example 4)

<br>

```
const sayHello = (name = "Human") => "Hello " + name;

const nicolas = sayHello();

console.log(nicolas);
// [LOG] Hello Human
```

이처럼 arrow function은 가끔씩 이벤트들을 추가하거나, function을 anonymous function으로 만드는데 좋다. 

Anonymous function: 익명 함수는 말 그대로 함수의 이름이 없는 함수로 클로저(Closure) 또는 콜백(Callback) 이라고도 부른다.

<br>
<br>

## example 5)

<br>

### 5-1) arrow function 이벤트 만들기

```
const button = document.querySelector("button");

const handleCLick = (event) => console.log(event);
button.addEventListener("click", handleCLick);

// 버튼 클릭시 콘솔 출력 됨.
```

<br>
<br>

### 5-2) arrow function 이벤트 만들기

arrow function을 통하여 5-1 과 같은 결과를 도출하면서 코드를 더욱 간단하고 보기 좋게 만들 수 있다.

```
const button = document.querySelector("button");

button.addEventListener("click", (event) => console.log(event));
```

유일한 규칙은 `button.addEventListener("click", (event) =>` 에서 argument가 event처럼 하나라면 ()를 꼭 할 필요는 없다. 하지만 두개 이상이라면 괄호가 필수로 필요하다. 하지만 정확함을 위해 ()를 해주도록 하자.

<br>
<br>

## example 6) - 1.2 Template Literals : 백틱 활용

```
const sayHello = (name = "human") => `Hello ${name}`;

const Jane = sayHello(); 

console.log(Jane);

// [LOG] Hello Human
```

<br>
<br>
<br>
<br>

# 1.3 Object Destructuring

<br>

```
const human = {
  name: "Jane",
  lastName: "Doe",
  nationality: "Korea",
  favFood: {
    breakfast: "egg",
    lunch: "Doncas",
    dinner: "Pasta"
  }
}

// const name = human.name;
// const lastName = human.lastName;
// const difName = human.nationality;
// const dinner = human.favFood.breakfast;
// ** 위와 같이 작성 할 때와 동일하게 출력 가능하다.

const { name, lastName, nationality: difName, favFood: {dinner, breakfast, lunch} } = human; 


console.log(name, lastName, difName, human.favFood.dinner)

// [LOG] Jane Doe Korea Pasta
```

<br>
<br>
<br>
<br>

# 1.4 Spread Operater

<br>

Spread Operator는 배열로부터 아이템을 가져와서 Unpack 시켜준다.

두 개의 Object를 병합한다던지 어떤 대상의 복사본을 만들거나, 어떤 콘텐츠를 다른 배열에 넣고싶을 때 등등 유용하게 사용할 수 있다.

```
const days = ["Mon", "Tues", "Wed"];
const otherDays = ["Thu", "Fri", "Sat"];

let allDays = [...days, ...otherDays, "Sun"];

console.log(allDays);

 [LOG] let allDays = [days, otherDays, "Sun"]; -> (3) [Array(3), Array(3), "Sun"]
// [LOG] let allDays = [...days, ...otherDays, "Sun"]; -> (7) ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"]
```

Spread Operator를 사용하면 두 배열의 콘텐츠들을 하나의 배열로 묶어주게 된다.

<br>

```
const ob = {
  first: "hi",
  second: "hello"
}

const ab = {
  third: "bye"
}

const mix = { ...ob, ...ab }

console.log(mix)

//[LOG] const mix = { ob, ab } -> {ob: Object, ab: Object} 
//[LOG] const mix = { ...ob, ...ab } -> {first: "hi", second: "hello", third: "bye"}
```

Object도 로그를 보면 Spread Operator를 사용하고 나면 두 개의 Object 콘텐츠를 가지게 된다.

<br>

```
const test = (something, args) => console.log(...args)
```

Spread Operator는 위와 같이 Argument, function에서도 잘 작동된다.
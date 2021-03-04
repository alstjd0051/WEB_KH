var a; // var키워드로 선언된 변수는 Hoisting 된다.
console.log(a); //undefined
a = "안녕";

foo();
/**
 * 함수 선언식은 hoisting된다.
 */
function foo() {
    console.log("foo");
}

bar(); //Uncaught TypeError: bar is not a function
/**
 * 함수 표현식
 * bar변수에 익명함수를 대입
 */
var bar = function () {
    console.log("bar");
};
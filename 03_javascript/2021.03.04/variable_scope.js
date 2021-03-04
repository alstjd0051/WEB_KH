// 함수 밖 script태그에 작성된 var변수는 전역변수로 등록된다.
// 최상위 객체 window의 속성으로 등록된다.
var a;
a = 100; //변수의 타입이 결정.
/**
 * 함수 안에 var 변수는 지역변수로 등록된다.
 * 지역변수는 함수 밖에서는 절대 접근할 수 없다.
 */
function test1() {
    var a = "아";
    // var a = true; //중복 선언 가능
    var b = 123;
    // c = "ㅋㅋㅋ"; // var 없이 선언된 변수는 함수안이라해도 전역변수로 등록
    console.log("a = " + a);
    console.log("b = " + b);
    // console.log("c = "+ c);
    console.log("전역변수 a = " + window.a);
    // (this용법2) 일반함수안에서 this는 window객체를 가리킨다
    console.log("전역변수 a = " + this.a);
}
/**
 * scope 유효범위
 * c-family언어가 가진 block scope가 아닌,
 * javascpript에서는 function scope를 가진다.
 */
function test2() {
    var x = 10;
    if (true) {
        var x = 100;
    }
    console.log(x);

    for (var i = 0; i < 10; i++) {

    }
    console.log(i); // 10
}
var k = 123.456;

if (true) {
    var k = 456.789;
}

console.log(k);

/**
 *  us strict 엄격모드 지원
 * ES6 지원
 * let - block scope를 가진 변수 키워드
 * const - block scope를 가진 상수 키워드
 */
function test3() {
    // "use strict";
    // var foo = 100; //Uncaught ReferenceError: foo is not defined
    // console.log(foo);
    let foo = 100;
    //let foo = 200; //Uncaught SyntaxError: Identifier 'foo' has already been declared

    const bar = '상수';
    // bar = '변수냐'; //variable_scope.js:60 Uncaught TypeError: Assignment to constant variable.
}
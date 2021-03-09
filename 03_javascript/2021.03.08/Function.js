/**
   * 함수선언식 
   */
function foo() {

}
/**
 * 함수 표현식
 */
var bar = function far() {

};
bar();
//far();// Uncaught ReferenceError: far is not defined

/**
 * 즉시 실행 함수 Immediately Invoked Function Expression IIFE
 */
(function () {
    console.log("hello iife!");
})();

(function () {
    console.log("bye iife!");
}());

(function (name) {
    console.log("안녕~ " + name);
})('철수');

/**
  * 매개인자의 합을 출력하는 가산기함수 add를 작성
  */
function test2() {
    add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55
    add(12.34, 45.67); // 58.01
    add('a', 'b', 'c', 'd'); // "abcd"
}

function add() {
    var sum = isNaN(arguments[0]) ? "" : 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum);
}

/**
 * 매개변수 parameter 함수선언부의 매개인자가 담길 공간(변수)
 * 매개인자 argument 함수호출부에서 전달될 값
 * 
 * 매개변수, 매개인자의 개수가 달라도 문제되지 않는다.
 */
function test1(x) {
    console.log("x = " + x);

    //매개인자 유사배열 arguments참조
    console.log(arguments);
    for (var i = 0; i < arguments.length; i++)
        console.log(arguments[i]);
}

/**
 *  a^2 + b^2 = c^2
 *  밑변  높이   빗변
 */
function test4(a, b) {

    var power = function (n) {
        return n ** 2;
    }
    //제곱근 구하기
    c = Math.sqrt(power(a) + power(b));
    console.log(c); // 11.180339887498949
}

/**
 * 함수의 return구문이 없다면 undefined를 리턴.
 */
function test3() {
    var k = koo();
    console.log(k); // undefined
}
function koo() {
    // return 100;
}
function soo() {
    return function (n) {
        alert(n);
    };
}
function test6() {
    // var f = makeFunction();
    // // console.log(f, typeof f);
    // f('js'); // 'hello js~'

    //(makeFunction()('js'));

    var sayHello = makeFunction('say');
    var sayGoodbye = makeFunction('good bye');

    sayHello('js');
    sayGoodbye('js');
}

function makeFunction(say) {
    return function (name) {
        console.log(say + ' ' + name + '~');
    };
}


/**
 * 자바스크립트에서 함수는 값으로 취급된다.
 * - 변수에 대입(함수표현식)할수 있고, 
 * - 함수의 인자로 전달되거나(콜백함수), 
 * - 리턴값으로 사용될 수 있다.
 */
function test5() {
    exec(function (n) {
        console.log(n + ": hello, " + names[n - 1] + "!");
    });
}
var names = [
    'html', 'css', 'js', 'jquery', 'java',
    'oracle', 'mybatis', 'maven', 'lombok', 'spring'
];
/**
 * 1: hello, html!
 * 2: hello, css!
 * 3: hello, js!
 * 4: hello, jquery!
 * 5: hello, java!
 * ...
 * 10: hello, spring!
 */
function exec(a) {
    // console.log(a);
    // console.log(typeof a);
    for (var i = 0; i < 10; i++)
        a(i + 1);
}

//1
var z = 50;
(function varTest() {
    var z = 55;
    z += 45;
    console.log('varTest() : z=', z); // 100
}());
console.log('z=', z); // 50

//2
var y = 99;
(function varTest2() {
    var x = 100;
    var y = 9;
    z = 1;
    console.log('varTest2() : x+y+z=', x + y + z); // 110
}());
console.log('y+z=', y + z);  // 100
// console.log('x+y+z=',x+y+z); // Uncaught ReferenceError: x is not defined

//3
//전역에서 실행한 for문의 내부변수 i
for (var i = 1; i <= 10; i++) {
    console.log(i); // 1~10까지 출력n
}
function getNum() {
    console.log('getNum() : i=', i);
}
getNum();

//4 
var num = 200;
function funcX() {
    var num = 100;
    return function () {
        console.log('num=', num);
    }
}
var myf = funcX();
console.log(myf); // ƒ (){ console.log('num=',num); }
myf();


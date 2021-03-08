/**
 * 함수 선언식
 */
function foo() {

}
/**
 * 함수 표현식
 */
var bar = function far() {

};
bar();
// far(); //Uncaught ReferenceError: far is not defined

/**
 * 즉시 실행 함수 Immediately Invoke Function Expression(IIFE)
 * - 선언과 동시에 실행할 수 있다.
 */
/*(function () {
    console.log("hello iife");
})();

(function () {
    console.log("bye iife");
}());

(function (name) {
    console.log("안녕 ~" + name);
}('철수')); */


/**
   * 매개변수 parameter 함수선언부의 매개인자가 담길 공간(변수)
   * 매개인자 argument 함수호출부에서 전달될 값
   * 
   * 매개변수, 매개인자의 개수가 달라도 문제되지 않는다.
   */
function test1(x) {
    console.log("x = " + x);

    // 매개인자 유사배열 arguments참조
    console.log(arguments);
    for (var i = 0; i < arguments; i++)
        console.log(arguments[i]);
}

/**
 * 매개인자의 합을 출력하는 가산기함수 add를 작성
 */
function test2() {
    add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //55
    add(12.34, 45.67); //58.01
    add('a', 'b', 'c', 'd'); // "abcd"

}
function add(args) {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(Math.round(sum * 100) / 100);
    // console.log(sum);
}
function add(a) {
    if (!isNaN(a))
        var sum = 0;
    else
        var sum = "";
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum);
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

/**
 * 피타고라스의 정의
 * a^2 + b^2 + c^2
 * 밑변   높이   빗변
 */
function test4(a, b) {
    function power(n) {
        return n ** 2;
    }
    //제곱근 구하기
    c = Math.sqrt(power(a) + power(b));
    console.log(c); //11.180339887498949
}


/**
 * 자바스크립트에서 함수는 값으로 취급된다.
 * 변수에 대입할 수 있고, 함수0의 인자로 전달되거나, 리턴값으로 사용될 수 있다.
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
function add(args){
    var sum =0;
    for(var i =0; i<arguments.length;i++){
        sum+=arguments[i];
        // console.log(arguments[i]);
        // console.log(sum);
    }
    console.log(Math.round(sum*100)/100);
}
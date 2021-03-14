/**
 * 지역변수:name,word
 * 전역변수: hi
 * 자유변수: 함수 지역범위에 정의되지 않은 변수
 */
var hi = "안녕"; //자유변수

function greet(name) {
    var word = "반가워";
    console.log(hi + name + word)
}
greet("철수");


//4 
function funcX() {
    var num = 100; //자유변수 
    return function () { //return
        console.log('num=', num);
    }
}
var num = 200;
var myf = funcX();
console.log(myf);
/**
 * ƒ () { //return
        console.log('num=', num);
    }
 */
myf();
//전역변수 cnt
var cnt = 0;

function test1() {
    console.log("globalCounter: " + ++cnt);
    //++cnt 증가 연산자
}

//전역변수 cnt
var cnt = 1;

function test2() {
    console.log("globalCounter: " + --num);
    //++cnt 증가 연산자

}



var base = 'hello, '; //자유변수 

function sayHelloTo(name) {
    var text = base + name; //return 문
    return function () {
        console.log(text);
    };
}

var hello1 = sayHelloTo('민성');
var hello2 = sayHelloTo('송민성');
var hello3 = sayHelloTo('나는 나야');
hello1();
hello2();
hello3();

var test3 = makeClosureCounter();

function makeClosureCounter() {
    var cnt = 0;
    return function () {
        console.log("ClosureCounter : " + ++cnt);
        //오작동을 할수가없다 
    }
}
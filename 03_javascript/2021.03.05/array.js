/**
 * javascript배열은 크기제한, 타입제한이 없다.
 * 
 * ArrayList<Object>와 비슷.
 */
function test1() {
    var arr1 = [];
    var arr2 = new Array(); // new 연산자 사용가능
    var arr3 = new Array(3);

    console.log(arr1);
    console.log(arr2);
    console.log(arr3);

    arr1[0] = 'a';
    arr1[1] = 'b';
    arr1[2] = 'b';
    arr1[3] = 'b';
    arr1[4] = 'b';
    arr1[5] = 'b';

    arr3[0] = 'a';
    arr3[1] = 'b';
    arr3[2] = 'c';
    arr3[3] = 'd';

    // 값가져오기
    console.log(arr3[3]);
    console.log(arr3[4]); //존재하지 않는 인덱스 = undefined


    // 반복문
    // for (var i = 0; i < arr1.length; i++) {
    //     console.log(arr1[i]);
    // }

    // for..in문
    // 배열 : i변수에는 배열의 인덱스가 대입됨.
    // 객체 : i변수에 속성명이 대입됨
    for (var i in arr1) {
        console.log(i, arr1[i]);
    }
};

/**
 * 초기화 : 변수 선언, 값대입 동시에 처리
 */
function test2() {
    var arr1 = [1, 2, 3]; //자바 int[] arr = {1,2,3};
    var arr2 = new Array("철수", "영희", "삼식");
    console.log(arr1);
    console.log(arr2);

    //타입제한 없다.
    var arr3 = [1, 2, 3, "안녕", true, 123.456, { id: "honggd" }];
    console.log(arr3);

    //2차원배열
    var arr4 = [1, 2, 3, ['a', 'b', 'c']];
    console.log(arr4);
    console.log(arr4[3][1]);

    //모든 요소를 열람
    for (var i in arr4) {
        console.log(arr4[i].length);
        if (arr4[i].length) {
            //배열인 경우
            for (var j in arr4[i])
                console.log(arr4[i][j]);
        }
        else
            //단순 요소인 경우
            console.log(arr4[i]);
    }
};

/**
 * 일반배열 : Array객체 상속. Array메소드 사용가능
 * 유사배열 : Array가 아닌 객체 상속. Array메소드 사용불가
 */
var test3 = function () {
    var arr1 = [1, 2, 3];
    var arr2 = document.getElementsByTagName("input");
    console.log(arr1);
    console.log(arr2);


    // 유사배열은 for...in사용하지 말것.
    // 유사배열은 객체처럼 작동함. index가 아닌 속성명이 i에 담기게된다.
    // for (var i in arr2) {
    //     console.log(i, arr2[i]); // 0 1 2 length item...
    // }

    for (var i = 0; i < arr2.length; i++) {
        console.log(arr2[i]);
    }
};
var test4 = function () {
    var arr = ['apple', 'melon', 'banana'];
    console.log(arr.indexOf('melon')); // 1
    console.log(arr.indexOf('strawberry')); // -1
    console.log(arr.lastIndexOf('melon')); // 1
};
/**
 * concat 두배열의 요소를 합쳐서 새로운 하나의 배열로 리턴.
 */

var test5 = function () {
    var arr1 = ['a', 'b', 'c'];
    var arr2 = [1, 2, 3, 4, 5];
    var arr3 = arr2.concat(arr1)

    console.log(arr1.concat(arr2)); //["a", "b", "c", 1, 2, 3, 4, 5]
    console.log(arr3); //["a", "b", "c", 1, 2, 3, 4, 5]
    console.log(arr1); // 원본배열은 변경되지 않음
};

/**
 * join : 요소를 지정한 구분자로 합쳐서 
 */

var test6 = function () {
    var arr = [1, 2, 3, 4, 5];
    // var s = arr.join("-"); 
    var s = arr.join();// 구분자 생략시 ,로 연결함.
    console.log(s);
    console.log(typeof s);
};

/**
 * reverse : 요소의 순서를 뒤집음.
 */
var test7 = function () {
    var arr = [1, 2, 3, 4, 5];
    console.log(arr.reverse()); // 원본 배열을 변경
};

/**
 * sort 오름차순(기본값) 정렬해서 리턴
 */
var test8 = function () {
    var arr = [4, 2, 3, 1, 5];
    // var arr1 = ["ㄱ", "ㄹ", "ㅁ", "ㄴ",  "ㄷ"];
    // console.log(arr.sort());
    // console.log(arr1.sort());


    //내림차순
    //정렬기준함수(콜백함수)를 내림차순으로 처리되도록 전달
    arr.sort(function (a, b) {
        return b - a;
    });
    console.log(arr);

    // 문자열 정렬 : 오름차순(사전등재순)
    var names = ["홍길동", '김길동', "라마단", "다나가"];
    console.log(names.sort());

    // 내림차순
    names.sort(function (a, b) {
        if (a > b) return -1; // 음수가 리턴되면 자리교환이 일어난다.
        if (a < b) return 1;  // 
        return b - a;
    });

    console.log("홍길동" - "김길동"); // NaN
    console.log("홍길동" > "김길동"); // true 크기 비교 연산

    console.log(names);
};

/**
 * push 배열 마지막에 요소추가후 변경된 길이를 리턴
 * pop 배열 마지막요소를 제거하고, 제거된 요소를 리턴
 * unshift 배열 0번지 요소 추가후, 변경된 길이를 리턴
 * shift 배열 0번지여소 제거후에, 제거된 요소를 리턴
 */
var test9 = function () {
    var arr = [];
    // arr.push(1);
    // arr.push(2);
    // arr.push(3);

    var k = 1;
    while (true) {
        arr.push(k++);
        if (k > 100) break;
    }

    //마지막요소 제거 : 제거된 요소 리턴
    // console.log(arr.pop());
    // console.log(arr.pop());

    //arr의 마지막요소부터 제거해서 모든 요소를 copy에 옮겨담기
    //[100, 99, 98,...., 3, 2, 1]
    var copy = [];
    // var k = 1; 
    // while(true){
    //   copy.push(arr.pop());
    //   if(++k > 100) break;
    // }
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        copy.push(arr.pop());
    }


    console.log(copy); // [100, 99, 98,...., 3, 2, 1]
    console.log(arr); // []
};

/**
 * 
 */
var test10 = function () {
    var arr = ['사과', '배', '아보카도'];
    arr.unshift('감자');
    arr.unshift('양파');

    console.log(arr.shift()); //제거된 요소 리턴

    console.log(arr);
};

/**
 * slice(startIndex(포함), endIndex미포함))
 * startIndex부터 endIndex전까지의 요소를 가져와서 새 배열로 리턴
 */
var test11 = function () {
    var arr = ['a', 'b', 'c', 'd', 'e'];
    // var other = arr.slice(1,4);
    // var other = arr.slice(1); //1번지부터 끝까지
    var other = arr.slice();  // 복제

    console.log(other);
    console.log(arr);
};
/**
 * 요소 제거 & 추가
 * splice(startIndex, deleteCount, item1, item2, .....)
 * - startIndex부터 deleteCount개의 요소를 제거하고,
 *   startIndex에 item1, item2,...를 추가
 */

var test12 = function () {
    var arr = ['a', 'b', 'c', 'd', 'e'];
    // a x y c d e
    arr.splice(1, 1, 'x', 'y');
    // a x k h e
    arr.splice(2, 3, 'k', 'h');
    //추가만 a x f r i k h e
    arr.splice(2, 0, 'f', 'r', 'i');
    //제거만
    // arr.splice(2, 3);
    arr.splice(2); // 2번지이후 모든 요소 제거
    console.log(arr);
};
/**
 * prompt를 이용해 사용자의 취미리스트를 입력받으세요.
 * 예) 농구,수영,캠핑,낚시
 * ,구분자로 잘라서 배열로 담은 후, 사전순 정렬이후, ul#hobby-list의 자식li태그로 추가하세요.
 * 
 */

var test13 = function () {
    var str = prompt("취미를 입력하세요(쉼표(,)로 구별)");
    var arr = str.split(",");
    arr.sort(function (a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });
    console.log(arr);
    var ul = document.querySelector("ul#hobby-list");
    for (var i = 0; i < arr.length; i++) {
        ul.innerHTML += "<li>" + arr[i] + "</li><br>";
    }

}

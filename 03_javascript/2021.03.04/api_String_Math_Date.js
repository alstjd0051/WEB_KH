/**
 * String 내장객체 : 문자열 관련 메소드를 제공
 */
var test1 = function () {
    var str = "Samsung Aple Xiomi";
    console.log(str.length); //length속성
    console.log(str.toUpperCase()); //SAMSUNG APLE XIOMI
    console.log(str.toLowerCase()); //samsung aple xiomi
    console.log(str.indexOf('ms')); //2
    console.log(str.lastIndexOf('i')); //17
    console.log(str.charAt(8)); //A
    console.log(str[8]); //문자열 -> 문자배열취급 //A

    //문자열 일부를 리턴 : 2번지 ms 잘라오기
    //substring(start[,end])
    console.log(str.substring(2, 4)); //ms
    console.log(str.substring(2)); // msung Aple Xiomi

    //substr(start[, length])
    console.log(str.substr(2, 2)); //ms
    console.log(str.substr(2)); //msung Aple Xiomi

    var arr = str.split(" ");
};

/**
 * 두개의 인자 문자열과 문자를 입력받고, 
 * 문자열에서 문자가 몇번 출현하는지 출력하는 함수를 생성
 * 
 * countChar("hahaha", "a") => 3
 * countChar("abccba", "c") => 2
 * countchar("abcde", "x") => 0
 */
var test2 = function () {
    var result = countChar("hahaha", "a");
    console.log(result);
    result = countChar("abccba", "c");
    console.log(result);
    result = countChar("abcde", "x");
    console.log(result);
};

var countChar = function (str, ch) {
    var cnt = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == ch)
            cnt++;
    }
    return cnt;
};

var test3 = function () {
    var num = 123.456;
    console.log(Math.round(num)); // 123
    console.log(Math.round(num * 100)); //12346
    console.log(Math.ceil(num)); //124
    console.log(Math.ceil(num)); //123
    console.log(Math.floor(num * 10) / 10); //123.5
    console.log(Math.floor(num)); //123
    console.log(Math.floor(num * 10) / 10); //123.4

    console.log(Math.random()); // 0.0(포함) ~ 1.0(미포함) 사이의 실수
    console.log(Math.trunc(Math.random() * 10 + 1)) //1~10사이의 난수 : <난수 *경우의 수 + 최소값>
};
/**
 * #test-rnd 하위의 li태그에 1 ~ 100 난수를 대입하세요.
 * 단, 짝수라면 글자색을 예쁘게(?) 할것.
 */
var test4 = function () {
    var lis = document.querySelectorAll("#test-rnd > li");
    for (var i = 0; i < lis.length; i++) {
        var n = Math.floor(Math.random() * 100) + 1;
        lis[i].innerHTML = n;
        //컬러 초기화
        lis[i].style.color = "black";
        //짝수인 경우
        (n % 2 == 0) && (lis[i].style.color = "skyblue");
    }
}
/**
   * Date는 객체생성시점의 날짜/시각정보를 가진 객체
   */
var test5 = function () {

    var now = new Date(); // new 연산자 사용가능
    console.log(now);

    var time1 = new Date(2000, 0, 1); // 월은 0-based 인덱스
    console.log(time1);
    var time2 = new Date(2000, 0, 1, 15, 30, 50);
    console.log(time2);
    var time3 = new Date("1999/03/01 15:34:20"); //날짜형식의 문자열도 처리가능
    console.log(time3);

    displayDateTime(now); // 1999/03/01(화) 15:34:20 형식으로 출력할것.
};

var displayDateTime = function (dt) {
    var yyyy = dt.getFullYear();
    var mm = get2digit(dt.getMonth() + 1);
    var dd = get2digit(dt.getDate());
    var day = dt.getDay();  //일(0) ~ 토(6)
    var dayArr = ['일','월','화','수','목','금','토'];
    var hh =  get2digit(dt.getHours());
    var mi =  get2digit(dt.getMinutes());
    var ss =  get2digit(dt.getSeconds());

    alert(yyyy + "/" + mm + "/" + dd 
        + "(" + dayArr[day] + ")" + " " 
        + hh + ":" + mi + ":" + ss);
};

var get2digit = function (n) {
    // return n.toString().padStart(2, '0');
    return n < 10 ? '0' + n : n;
}


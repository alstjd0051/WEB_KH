function test1() {
    console.log(3 + 7 + "7");
    console.log(typeof (3 + 7 + "7"));

    console.log(7 - "7"); // 7이 자동 형변환이 되어 0이되었다.
    console.log(7 * "7"); // 49
    console.log(7 / "7"); // 1
    console.log(7 % "4"); // 3

    console.log(7 % "a"); //NaN 숫자로 자동 형변환이 불가한 우항
    console.log(typeof (NaN)); // number
    //null - object 

}

var test2 = function () {
    var num = "1234.567원";
    console.log(Number(num)); //1234.567 정수/실수로 변환. 변환불가한 문자 있으면 NaN을 리턴
    console.log(parseInt(num)); // 1234 정수변환. 문자가 있어도 좌측부터 최대한 변환
    console.log(parseFloat(num)); // 1234.567 실수로 변환. 문자가 있어도 좌측부터 최대한 변환
};
/**
 * #num1, #num2의 값을 더해서 출력하세요
 * 
 * input 태그의 value는 type속성과 관계없이 모두 string이다.
 */
var test3 = function () {
    var sum = Number(num1.value) + Number(num2.value);
    console.log(sum);
};

var test4 = function () {
    console.log(10 / 0); //Infinity
    console.log(typeof (10 / 0)); //number

    console.log(10 / "a"); NaN
    console.log(typeof (10 / " a")); // number

    var num = prompt("숫자를 입력하세요.");
    console.log(typeof (num)); // string "123"

    if (isNaN(num))
        alert("숫자가 아닙니다");
    else
        alert("숫자입니다.");
};


/**
 * 변수, 리터럴(값)이 boolean형으로 형변환 가능
 * 
 * 값이 존재하는 것은 true로 치환 : 123, 3.14, "안녕", 'ㅋㅋㅋ', new
 * 값이 존재하지않는 것은 false로 치환 : 0, 0.0, "", '', ndefined, null, NaN
 * 
 */
var test5 = function () {
    console.log(Boolean(123));
    console.log(Boolean(-100));
    console.log(Boolean(3.14));
    console.log(Boolean("abc"));
    console.log(Boolean('ㅋㅋㅋ'));
    console.log(Boolean(new Date()));


    // false인경우
    console.log(Boolean(0));
    console.log(Boolean(0.0));
    console.log(Boolean(""));
    console.log(Boolean(undefined));
    console.log(Boolean(null));
    console.log(Boolean(NaN));


    var name = prompt("이름을 입력하세요.");
    //1. "홍길동" 확인 -> "홍길동" -> true
    //2. ""확인 -> "" -> false
    //3. 취소 -> null -> false

    if (name) {
        alert("반갑습니다, [" + name + "]님");

        var result = document.querySelector("#result");
        if (result) {
            console.log("#result가 존재");
            result.innerHTML = "반갑습니다, [" + name + "]님";
        }
        else {
            console.log("#result가 존재하지 않음!");
            document.querySelector("body").innerHTML
                += "<h1>반갑습니다, [" + name + "]님</h1>";

        }
    }
    else {
        alert("올바른 이름을 입력하세요!");
    }
}


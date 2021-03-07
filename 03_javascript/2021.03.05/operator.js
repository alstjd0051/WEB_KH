/**
 * 일반동등비교연산자
 * == : 타입이 달라도 형변환후 값이 같으면 true
 * != : 타입이 달라도 형변환후 값이 다르면 true
 * 
 * 엄격동등비교연산자
 * === : 값, 타입 모두 일치해야 true, 하나라도 다르면 false
 * !== : 값, 타입 하나라도 다르면 true, 그렇지 않으면 false
 */
var test1 = function () {
    console.log(3 == "3"); // true
    console.log(3 != "3"); //false 형변환 이후 같으므로 false

    console.log(3 === "3"); //false
    console.log(3 === 3); // true
    console.log("3" === "3"); // true
    console.log(3 === Number("3")); // true

    console.log(3 !== "3"); //true
    console.log(3 !== 3); //false
    console.log("3" !== "3"); //false
}

var test2 = function () {
    var num = prompt("정수를 입력하세요.");

    if (num % 2 == 0) {
        alert("짝수");
    }
    else {
        alert("홀수");
    }

    //짧은 조건문
    // a조건식) && b(실행문) : a가 참일때 b 실행
    // a || b : a가 거짓일때 b 실행
    num % 2 != 0 && (result = "짝수");
    num % 2 != 0 || (result = "홀수");
    alert(result);

    //return 구문은 짧은 조건문에서 사용할 수 없다.
    
}

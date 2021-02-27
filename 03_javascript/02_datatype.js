function test1(){
    //변수 선언시 var 키워드 사용.
    var i;
    console.log(i, typeof(i)); // undefined undefined
    
    //값대입이 일어날때, 변수타입이 결정된다.
    i = 100; //i는 숫자형 변수(정수, 실수)
    i = 3.57; 
    console.log(i, typeof(i));
    i = "ㅋㅋㅋ 이게 좋다규 ㅋㅋ";//i는 문자열 변수
    i = '안녕'; //"", '' 감싸서 문자형 표현
    console.log(i, typeof(i));
    
    i = true;
    console.log(i, typeof(i)); //boolean
    
    //객체
    //배열도 하나의 객체
    i = [1,2,3, '안녕'];
    console.log(i, typeof(i)); //object

    //속성명 : 속성값
    i = {
        name : '홍길동',
        age : 30,
        hobby : ['축구','농구', '야구']
    };
    console.log(i, typeof (i));

    

}
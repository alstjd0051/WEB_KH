var hi = "안녕";
/**
 * 자유변수 : 함수 지역범위에 정의되지 않은 변수
 * hi가 자유변수
 */
function greet(name) {
    var word = "반가워";
    console.log(hi + name + word);
}
greet("철수");


var test2 = makeClosureCounter();

        function makeClosureCounter() {
            var cnt = 0;
            return function () {
                console.log("closureConter : " + ++cnt);
            }
        }

        //전역변수 cnt  
        var cnt = 0;
        function test1() {
            console.log("globalCounter : " + ++cnt);
        }

        /**
         * 함수실행에 필요한 모든 자원(지역변수, 자유변수)을 가지고 외부로부터 닫혀있는 함수.
         */
        function funcX() {
            var num = 100;
            return function () {
                console.log('num=', num);
            }
        }
        var num = 200;
        var myf = funcX();
        console.log(myf); // ƒ (){ console.log('num=',num); }
        myf();
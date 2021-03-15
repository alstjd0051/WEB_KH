/**
   * filter(selector)
   * 현재 jquery객체의 요소중에 seletor에 부합하는 요소만 추려서 다시 jquery객체로 반환.
   */
function test1() {
    var $p = $(".wrapper > p");
    // console.log($p); 
    // console.log($p.filter(".test")); 

    // $p.filter(".test")
    // $p.filter(":even") // 짝수 인덱스 요소만 반환 0 2 4 6...
    // $p.filter(":odd") // 홀수 인덱스 요소만 반환 1 3 5 7....
    //   .css("color", "deeppink");

    //콜백함수를 통한 filtering
    //p태그안의 text중 안녕을 제외한 숫자가 짝수인 경우만 css적용하기
    // $p
    //   .filter(function(index, p){
    //     console.log(index, p, index % 2 == 0);
    //     return index % 2 == 0;
    //   })
    //   .css("color", "deeppink");
    $p
        .filter(function (index, p) {
            //1. textContent 가져오기
            var text = p.innerText
            //2. 문자열에서 숫자만 추리기: replace
            var num = text = text.replace(/[^\d]/g, ""); // "안녕77" -> "77"
            //3. 숫자 짝수 여부 리턴하기
            return index % 2 == 0;
        })
        .css("color", "sky blue");

}
/**
 * first()
 * last()
 * eq(index)
 * not(selector)
 */
function test2() {
    var $p = $(".wrapper p")
    console.log($p.first()); //jquery객체 리턴
    console.log($p[0]); //javascript태그객체
    // $p.first()
    // $p.last()
    // $p.eq(5)
    $p.not(".test")
        .css("font-size", "2em")
        .css("color", "springgreen")
}
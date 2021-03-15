var red = {
    color: "red",
    border: "2px solid red"
};

/**
 * parents([selector]) 모든 조상요소
 */

/**
 * parent([selector]) 직계부모요소
 */
function test1() {
    $("span")
        .parent()
        .parent("div")
        .css(red);
}
function test2() {
    $("span")
        .parents("ul")
        .css(red);
}

/**
 * parentsUntil(selector) 특정 조상요소 전까지의 모든 조상요소
 */
function test3() {
    $("span")
        .parentsUntil("div")
        .css(red);
}

/**
 * children([selector]) : 직계 자식 요소
 */
function test4() {
    var $wrap = $("div.wrap")
    $wrap
        .children()
        .css(red);
}

/**
 * find(selector) : 모든 후손요소중 selector와 일치하는 요소
 */
function test5() {
    var $wrap = $("div.wrap");
    $wrap
        .find("span")
        .css(red);
}

/**
 * @실습문제 : div.wrap -----------> li2-2
 * 1. div.wrap ---------> li2-2
 * 2. #fromMe ---------> li2-2
 */
function test6() {
    // var $elem = $("div.wrap")
    //     .find("ul:eq(2)")
    //     .children(":eq(1)")
    // console.log($elem);
    // $elem.css(red)

    var $elem = $("span#fromMe")
        .parent("ul")
        .eq(1)
        .children()
        .eq(1);
    console.log($elem);
    $elem.css(red);
};

/**
 * siblings([selector]) : 현재요소를 제외한 형제요소를 모두 반환
 */
function test7() {
    var $elem = $("#start").siblings();
    console.log($elem);
    $elem.css(red)
}

/**
 * next()
 * nextAll([selector])
 * nextUntil(selector)
 */
 function test8() {
    var $elem = $("#start")
                  .nextUntil("p");
    console.log($elem);
    $elem.css(red);
  }

  /**
   * prev()
   * prevAll([seletor])
   * prevUntil
   */
  function test9() {
      var $elem =$("#start")
      .prevUntil("p")
      console.log($elem)
      $elem.css(red);
      
  }
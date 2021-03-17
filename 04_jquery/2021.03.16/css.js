function test1() {
    $("#img-river").show(4000, function () {
        // alert("show 끝!")
        $(this).css("border", "3px soid gray");
    });

}
function test2() {
    $("#img-river").hide(4000, function () {
        alert("hide 끝!");
    });
}

function test3() {
    $("#img-river").toggle(1000, 'easeInOutBack', function () {
        // alert("toggle 끝!");
    })
}
/**
 * fadeIn
 */
function test4() {
    $("#flower").fadeIn(1000);
}

/**
 * fadeOut
 */
function test5() {
    $("#flower").fadeOut(1000);
}

/**
 * fadeToggle
 */
function test6() {
    $("#flower").fadeToggle(1000);
}
/**
 * fadeTo
 */
function test7() {
    $("#flower").fadeTo(1000);
}

$("#flower2").hover(function () {
    //mouseenter
    $(this)
        .fadeTo(100, 1)
        .css("transform", "scale(1.1, 1.1)");
}, function () {
    //mouseleave
    $(this)
        .fadeTo(100, .7)
        .css("transform", "scale(1, 1)");
});
/**
 * animate(cssProps, duration, easing, callback);
 */
 function test7() {
    $("#box1").animate({
      width : "500px",
      height : "500px",
      "background-color" : "#00bfff",
      "border" : "3px solid #000000"
    }, 3000, 'easeOutBounce', function(){
      alert("animate완료!");
    });
  }

  $(".img-container img").click(function(){
      $(this).animate({
          left : '-158px'
      }, 600, 'swing');
  })
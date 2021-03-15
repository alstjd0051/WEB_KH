/**
         * 자식요소 접근시에도 이벤트 발생
         * 자식요소에서 다시 현재요소로 재진입시에도 이벤트 발생
         */
// $(".outer")
//   .mouseover(function(){
//     console.log("mouseover");
//   })
//   .mouseout(function(){
//     console.log("mouseout");
//   });

/**
 * 자식요소 접근시에는 이벤트 발생 안함.
 */
// $(".outer")
//   .mouseenter(function(){
//     console.log('mouseenter');
//   })
//   .mouseleave(function(){
//     console.log('mouseleave');
//   });

/**
 * hover이벤트는 존재하지 않는다.
 * mouseenter | mouseleave handler를 한번에 바인딩
 */
$(".outer")
    .hover(function () {
        //mouseenter event handler
        console.log('hover : mouseenter');
        $(this).addClass("border");
    }, function () {
        //mouseleave event handler
        console.log('hover : mouseleave');
        $(this).removeClass("border");
    });
var max = 30;
$("#memoFrm").submit(function (e) {
    var $memo = $(this).find("textarea");
    var value = $memo.val(); // 문자열

    if (value.length > max)
        e.preventDefault();
    // return false;

});

$("#memo").keyup(function () {
    var $textarea = $(this);
    var value = $textarea.val();
    var len = value.length; // #memo작성내용의 길이

    var $counter = $("#counter");
    $counter.text(len);



    if (len > max) {
        $counter.css("color", "red");
    }
    else {
        $counter.css("color", "#000");
    }
});

var max = 30;
$("#memoFrm").submit(function (e) {
    var $memo = $(this).find("textarea");
    var value = $memo.val(); // 문자열

    if (value.length > max)
        e.preventDefault();
    // return false;

});

$("#memo").keyup(function () {
    var $textarea = $(this);
    var value = $textarea.val();
    var len = value.length; // #memo작성내용의 길이

    var $counter = $("#counter");
    $counter.text(len);



    if (len > max) {
        $counter.css("color", "red");
    }
    else {
        $counter.css("color", "#000");
    }
});

$(".box")
    .on('click', function () {
        $(this).html("<h1>안녕</h1>");
    })
    .on('mouseleave', function (e) {
        console.log(e);
        $(this).html("");
    });

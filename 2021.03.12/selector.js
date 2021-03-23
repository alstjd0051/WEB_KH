/**
 * tag
 */

function test1() {
    // var $lis = $("ul > li");
    // console.log($lis); // jquery객체
    // $lis.css("color", "springgreen");

    // var lis = document.querySelectorAll("ul > li")
    // for(var i = 0; i < lis.length; i++)
    //   lis[i].style.color = "deeppink";

    // $(".foo").css("font-size", "2em");

    var $bar1 = $("#bar1");
    var $bar1_;
    console.log($bar1);
    console.log($bar1_ = $bar1.css("text-decoration", "underline"));
    console.log($bar1 == $bar1_); // true

    // method chaining
    $("#bar1").css("font-size", "3em")
        .css("background-color", "deeppink")
        .css("color", "#fff");

}

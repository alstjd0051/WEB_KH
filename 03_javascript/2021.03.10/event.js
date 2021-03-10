/**
  * 현재페이지 모든 설정이 끝난후 load이벤트발생
  */
window.onload = function () {
    // document.querySelector("#btn2").onmouseover = function(){
    //   alert('123');
    // };
};
function test1() {
    console.log('click event 발생!');
}
// document.querySelector("#btn2").onclick = function(){
//   console.log("#btn2 click event 발생!");
// };
document.querySelector("#btn2").onclick = test1; // 함수 자체를 전달. 호출하지 말것.

document.querySelector("#btn3").addEventListener("click", function () {
    alert("#btn3 clicked!");
});

/**
   * Event객체 : 발생한 이벤트관련 모든 정보를 가진 객체
   *             이벤트핸들러함수의 인자로 전달이 됨.
   */
document.querySelector(".box").onmouseover = function (e) {
    console.log(e);
    console.log(e.target == document.querySelector(".box"));

    e.target.innerHTML = "안녕";
};
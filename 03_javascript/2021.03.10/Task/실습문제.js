document.querySelector("#btn-generate").onclick = function (e) {
    var btns = [
        new MyButton("네이버", "https://www.naver.com"),
        new MyButton("구글", "https://www.google.com"),
        new MyButton("KH", "https://www.iei.or.kr"),
        new MyButton("와삼", "https://www.w3schools.com"),
    ];

    var btnWrapper = document.querySelector(".btn-wrapper");
    btns.forEach(function (btn, i) {
        var html = "<button type='button' onclick='goTo(\"" + btn.url + "\");'>"
            + btn.value
            + "</button>&nbsp;"
        btnWrapper.innerHTML += html;
    });

    //1회만 실행되도록 핸들러 삭제
    e.target.onclick = null;
};
/*
 * 생성자함수
 */
function MyButton(value, url) {
    this.value = value;
    this.url = url;
}

function goTo(url) {
    location.href = url;
}
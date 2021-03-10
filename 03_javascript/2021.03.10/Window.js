/**
 * open 새로운 window생성
 * - 새탭
 * - 팝업창
 * 
 * open(url, name, specs)
 * - specs 문자열
 * - name : 팝업창이름, _self->지정시 현재창에서 열림
 * 
 */
function test1() {
    w = open("/03_javascript/2021.03.09/13_object.html", "newWindow", "windth=800", "height=500", top3 = 300, left = 300);
    // w = open("/03_javascript/2021.03.09/13_object.html", "_self", "windth=800", "height=500", top3 = 300, left = 300);
    console.log(w);
    console.log(window == w);
    //1초 이후 실행
    setTimeout(function () {
        w.alert('object file open~');
    }, 1000);
};

var w; //팝언윈도우객체

function test2() {
    w && w.close();
};


/**
 * setTimeout(callbackFunction, millis);
 * millis초이후에 callbackFunction을 실행
 * 
 * 동기적(위에서 아래로, 좌에서 우로 순서대로 처리)
 * timeoutAPI의 메소드는 비동기적으로 처리된다.
 */
function test3() {
    setTimeout(function () {
        alert("반갑습니다.");
    }, 3000);

    alert('안녕')
}

/**
 * 팝업창을 열고, <h1>3초 팝업</h1>을 작성
 * 3초이후에 자동으로 창이 닫히도록 하세요.
 * opne("","","sec")
 */
function test4() {
    var w = open("", "popup", "width=300, height=300, left=400, top=400");
    w.document.write("<h1>3초 팝업</h1>");

    setTimeout(function () {
        w.close();
    }, 3000);
}

/**
 * setInterval(callbackFunction, millis)
 * millis초마다 callbackFunction을 실행
 */
function test5() {
    var num = 1;
    setInterval(function () {
        console.log(num++);
    }, 1000);
}

/**
   * setInterval(callbackFunction, millis)
   * millis초마다 callbackFunction을 실행
   */
/**
   * setInterval(callbackFunction, millis)
   * millis초마다 callbackFunction을 실행
   */
function test5() {
    // var num = 1;
    // setInterval(function(){
    //   console.log(num++);
    // }, 1000);
    var foo = function () {
        var now = new Date();
        var strFormat = getTimeFormatStr(now);
        document.querySelector("#clock").innerHTML = strFormat;
    };
    foo();
    setInterval(foo, 1000);
}
/**
 * 00:00:00
 * @param {Date} 
 */

function getTimeFormatStr(time) {
    var f = function (n) {
        return n >= 10 ? n : "0" + n;
    };
    var hh = f(time.getHours());
    var mi = f(time.getMinutes());
    var ss = f(time.getSeconds());
    return hh + ":" + mi + ":" + ss;
}

function test6() {
    var cnt = 10;
    var cd = document.querySelector("#countdown");
    cd.style.display = "block";
    var f = function () {
        cd.innerText = cnt--;

        if (cnt < 0) {
            clearInterval(intervalId);
            cd.innerText = "welcome";
        }
    };
    f();
    var intervalId = setInterval(f, 1000);
    console.log(intervalId);
}
/**
 * navigator : 현재 실행중인 browser에 대한 정보를 가진 객체
 */
function test7() {
    console.log(navigator);

    //페이지 새로고침
    // location.reload();

    //페이지 이동
    location.href = "http://naver.com";
}

/**
 * location : 주소창 관련 정보를 가진 객체
 */
function test8() {
    console.log(location);
}

/**
 * history : 방문기록 관련 정보를 가진 객체
 * 
 * back() : 뒤로가기
 * forward() : 앞으로 가기 
 * go(n) : 1 | 0 | -1 : 
 */
function test9() {
    console.log(history);
}

/**
 * screen : 모니터 관련 정보를 가진 객체
 * 
 * - width
 * - height
 * - availwidth
 * - availHeight
 */
function test10() {
    console.log(screen);
    var w = 300;
    var h = 300;
    var left = (screen.availWidth - w) / 2 + screen.availLeft;
    var top = (screen.availHeight - h) / 2

    open("", "popup", "width=300, height=300, left=" + left + ", top=" + top);

}
/**
 * Node객체 : 모든 DOM객체가 Node객체를 상속받는다.
 * 
 * H2 - HTMLHeadingElement - HTMLElement - Element - Node - EventTarget - Object
 * 
 * - firstChild | lastChild | childNodes...
 * - contains() | appendChild() | removeChild()...
 */
function test11() {
    var h2 = document.querySelector("h2:last-of-type");
    console.dir(h2);

    //img태그 동적으로 생성
    // var img = document.createElement("img");
    // img.src = "images/windowObjects.png";
    // img.style = "width: 200px;";
    // //<img src="images/windowObjects.png" style="width: 200px;">
    // console.log(img);

    // document.querySelector(".img-wrapper").appendChild(img);

    document.querySelector(".img-wrapper").innerHTML
        += '<img src="images/windowObjects.png" style="width: 200px;">';
}
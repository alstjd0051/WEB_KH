document.memberFrm.onsubmit = function () {
    //1.아이디검사
    //첫글자는 반드시 영소문자로 이루어지고, 
    //숫자가 하나이상 포함되어야함.
    //아이디의 길이는 4~12글자사이
    var userId = $("#userId").val();
    if (!/^.{4,12}$/g.test(userId)) {
        alert("아이디는 4~12자리")
        // return false;
    }
    if (!/[0-9+]/g.test(userId)) {
        alert("숫자가 하나이상 포함되어야함")
        // return false;
    }

    if (!/^[a-z]/.test(userId)) {
        alert("첫글자는 반드시 영소문자로 이루어져야함")
        // return false;
    }

    //2.비밀번호 확인 검사
    // //숫자/문자/특수문자 포함 형태의 8~15자리 이내의 암호 정규식 
    var userPw = $("#pwd").val();
    if (!((/^.{8,15}$/.test(userPw)) && (/[0-9+]/g.test(userPw)) && (/[*&~^%$#@!+-]/g.test(userPw)))) {
        alert("숫자/문자/특수문자 포함 형태의 8~15자리 이내의 암호 정규식");
        // return false;
    }

    // //비밀번호일치여부 검사
    var pwdCheck = $('#pwdCheck').val();
    if (!(userPw == pwdCheck))
        alert("비밀번호가 일치하지 않습니다.");
    // return false;

    //3.이름검사 : 한글2글자 이상만 허용. 
    var userName = $("#userName").val();
    console.log(userName);
    if (!(/^[가-힣]{2,}$/.test(userName))) {
        alert("한글2글자 이상만 허용합니다.")
        // return false;
    }

    //4.주민번호체크
    var ssn1 = $("#ssn1").val();
    var ssn2 = $("#ssn2").val();
    if (/^\d{6}$/.test(ssn1) == false) {
        alert("숫자 6개를 입력하세요")
        // return false;
    }
    if (/^\d{7}$/.test(ssn2) == false) {
        alert("숫자 7개를 입력하세요")
        // return false;
    }
    //5.이메일 검사
    var email = $("#email").val();
    console.log(email)
    if (!/^[0-9a-zA-Z]{4,12}@/.test(email)) {
        alert("이메일은 @가 포함 되어야 함(@앞에가 영문자,숫자로  4~12글자 ) ")
    }

    //6. 전화번호 검사
    var tel1 = $("#tel1").val();
    var tel2 = $("#tel2").val();
    var tel3 = $("#tel3").val();
    if (!(/^010$/.test(tel1))) {
        alert("번호 앞 3자리는 010이어야합니다.")
    }
    if (!(/^\d{3,}$/.test(tel2))) {
        alert("3자리 이상입력")
    }
    if (!(/^\d{4}$/.test(tel3))) {
        alert("4자리만 입력")
    }
    return true;
}
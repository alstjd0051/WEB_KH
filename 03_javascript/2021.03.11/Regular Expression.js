/**
 * 정규표현식
 * 특정규칙을 가진 무자열 집합에 대한 형식언어
 * 유효성검사, 검색, 문자열치환 처리등을 효율적으로 할 수 있다.
 * 간결한 코드를 만드는 표현식 숙지가 쉽지 않다.
 * 언어독립적.
 */
function test1() {
    //객체생성
    var re1 = /a/;
    var re2 = new RegExp(/[0-9]/);
    var re3 = new RegExp("[a-z]");

    //test():boolean
    console.log(re1.test('abcde')); // true
    console.log(re1.test('bcdef')); // false

    console.log(re2.test('honggd123')); //true
    console.log(re2.test('honggd')); //false

    console.log(re3.test('가나다ABC123')); //false
    console.log(re3.test('가나다ABC123')); //false

    //exec():[]
    console.log(re1.exec('abcde')); //["a", index: 0, input: "abcde", groups: undefined]

    // 문자열 
    // match 
    console.log('cba'.match(re1));
    // search 해당인덱스
    console.log('adqtskldfjlsdfj'.search(re1)); // 0
    // replace
    console.log('cabakadala'.replace(/a/g, 'A')); // cAbakadala | cAbAkAdAlA
    // split
    console.log('사과,배,양파,마늘'.repeat(/\s*, \s*/).split(/[, ]/));
}

/**
 * flag문자
 * g global 전역비교를 수행. 이게 없으면 첫 매칭만 처리. g가 있으면 여러건 처리
 * i ignore 영문자주에 대소문자를 구분하지 않고 비교 수행
 * m multi-line 여러줄이(\n) 있는 경우 줄단위 비교수행 
 */
function test2() {
    var str = 'Javascript jQuery Ajax';
    // $&는 매칭된 text를 가리키는 wildcard
    // area.innerHTML = str.replace(/a/gi, "<mark>$&</mark>");
    area.innerHTML = str.replace(new RegExp("a", "gi"), "<mark>$&</mark>");
}

/**
 * anchor문자
 * ^ 문자열시작
 * $ 문자열끝
 */
function test3() {
    var str = 'Javascript\nxxx\njQuery\nAjax';
    area.innerHTML = str.replace(/^j/igm, "<mark>$&</mark>");
    // area.innerHTML = str.replace(/x$/ig, "<mark>$&</mark>");
}

/**
 * 사용자로부터 문자열을 입력받고, 
 * k로 시작하면서, h로 끝나는 경우에는 잘하셨습니다.
 * 아닌 경우, 적합한 문자가 아닙니다. 경고창을 띄우세요.
 */

function test4() {
    var str = prompt("문자열을 입력하세요.");
    var re1 = /^k/;
    var re2 = /h$/;

    if (re1.test() && re2.test(str))
        arlert("잘하셨습니다.");
    else
        alert * "적합한 문자가 아닙니다.";
}
/**
 * . 포인트 임의의 한글자를 의미.
 */
function test5() {
    // var re1 = /^...$/;
    // console.log(re1.test('ab')); // false
    // console.log(re1.test('abc')); // true
    // console.log(re1.test('abcd')); // false
    // console.log(re1.test('a b')); // true
    // console.log(re1.test('   ')); // true

    var re2 = /a.b/g;
    area.innerHTML = "ab aab aaab".replace(re2, "<mark>$&</mark>");

    var re3 = /in..$/; // in하고 두글자로 끝나는 문자열 검사.
    ["goingo", "goin", "oointo", "going"].forEach(function (s) {
        console.log(re3.test(s))
    });

    var re4 = /^c...k$/; // c로 시작하고 k로 끝나는 총5글자인 문자열 검사
    ["ck", "cbk", "cbak", "cbawk", "cbawak"].forEach(function (s) {
        console.log(re4.test(s)); //false false true false
    });
}

/**
 * []
 * 한글자를 의미하며, 대괄호안의 문자는 나타냄.
 * 대괄호안에 사용된 ^특정문자 제외
 */
function test6() {
    var s = "Javascript jQuery Ajax 12345"
    // area.innerHTML = s.replace(/[aj]/g, "<mark>$&</mark>"); // a 또는 j
    // area.innerHTML = s.replace(/[^aj]/g, "<mark>$&</mark>"); // a 또는 j가 아닌 문자

    // area.innerHTML = s.replace(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/g, "<mark>$&</mark>"); // 영대문자
    // area.innerHTML = s.replace(/[A-Z]/g, "<mark>$&</mark>"); // 영대문자
    // area.innerHTML = s.replace(/[0123456789]/g, "<mark>$&</mark>"); // 숫자
    // area.innerHTML = s.replace(/[0-9]/g, "<mark>$&</mark>"); // 숫자
    // area.innerHTML = s.replace(/[A-Za-z]/g, "<mark>$&</mark>"); // 영대문자 + 영소문자 
    // area.innerHTML = s.replace(/[A-Za-z0-9]/g, "<mark>$&</mark>"); // 영대문자 + 영소문자 + 숫자

    // var hangul = "안녕하세요, James입니다. I Love 서울!";
    var hangul = "ㅏㅏ..ㅇㅇㅇ....음....ㅣㅣㅣㅘ";
    // area.innerHTML = hangul.replace(/[가-힣]/g, "<mark>$&</mark>"); 
    area.innerHTML = hangul.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, "<mark>$&</mark>"); //
}


/**
 * 1. 사용자로 숫자로 시작되지않는 id를 검사.
 * 2. 숫자4자리인 비밀번호 여부 검사.
 * 
 * 
 * 유효하지 않은 경우, alert창 띄우기. 
 */
function test7() {
    var id = prompt("id 입력해주세요.");
    if (/^[0-9]/.test(id)) {
        alert("아이디는 숫자로 시작할 수 없습니다.");
        return;
    }

    var pwd = prompt("pwd 입력해주세요.");
    if (/[0-9][0-9][0-9][0-9]$/.test(pwd)) {
        alert("비밀번호는 숫자4자리어야합니다.");
        return;
    }

    alert("iod : " + id + ", pwd :" + pwd);
}

/**
 * 
 * \d decimal 숫자
 * \w 영문자, 숫자, _
 * \s spce 공백문자, 탭, 개행문자
 * 
 * \D 숫자가 아닌 문자
 * \W 영문자, 숫자, _가 아닌 문자
 * \S 공백문자, 탭, 개행문자가 아닌 문자
 */
function test8() {
    var s = "A1 B2 c3 d_4 e:5' ` ffGG6767--__--!\"@#$%^&*()     가\n나\n다\n";

    // area.innerHTML = s.replace(/\d/g,"<mark>$&</mark>");
    // area.innerHTML = s.replace(/\w/g,"<mark>$&</mark>");
    // area.innerHTML = s.replace(/\s/g,"<mark>$&</mark>");

    // area.innerHTML = s.replace(/\D/g,"<mark>$&</mark>");
    // area.innerHTML = s.replace(/\W/g,"<mark>$&</mark>");
    // area.innerHTML = s.replace(/\S/g,"<mark>$&</mark>");

    // area.innerHTML = s.replace(/[0-9]/g,"<mark>$&</mark>");
    // area.innerHTML = s.replace(/[0-9A-Za-z_]/g,"<mark>$&</mark>");
    // area.innerHTML = s.replace(/[\t\n]/g,"<mark>$&</mark>");

    // area.innerHTML = s.replace(/[^0-9]/g,"<mark>$&</mark>");
    area.innerHTML = s.replace(/[^0-9A-Za-z_]/g, "<mark>$&</mark>");
    // area.innerHTML = s.replace(/[^\t\n]/g,"<mark>$&</mark>");

}

/**
 * () grouping
 * | or
 */
function test9() {
    var s = "월요일에는 월월, 화요일은 화나구," +
        "수요일은 술땡기고,목요일은 목이 땡기고, 금요일은 야호~";
    // area.innerHTML = s.replace(/(수요일|목요일|금요일)/g, "<mark></mark>");
    area.innerHTML = s.replace(/[수|목|금]요일/g, "<mark></mark>");
    // area.innerHTML = s.replace(/[수목금]요일/g, "<mark></mark>");
}

/**
 * escaping
 * 메타문자를 실제문자값으로 사용하려면, \ 역슬래시를 통해 escaping처리한다.
 * []안에서는 escaping필요없음. ^은 첫째자리 사용하지 말것.
 */
function test10() {
    var s = "$12$ \-\ $25$"
    // area.innerHTML = s.replace(/\$/g, "<mark></mark>");
    // area.innerHTML = s.replace(/^\$/, "<mark>$&</mark>"); // 시작하는 $ 하나
    area.innerHTML = s.replace(/^\$$/, "<mark>$&</mark>"); // 끝나는 $ 하나
}

/**
 * 수량자
 * 
 * a* a가 0개 이상
 * a+ a가 1개이상
 * a? a가 0 | 1개
 * 
 */
function test11() {
    var s = "aabc abc bc";
    // area.innerHTML = s.replace(/a*b/g, "<mark>$&</mark>");
    // area.innerHTML = s.replace(/a+b/g, "<mark>$&</mark>");
    area.innerHTML = s.replace(/a?b/g, "<mark>$&</mark>");

}

/**
 * 수량표현
 * a{5} a가 5번
 * a{2,5} a가 2~5개
 * a{3,} a가 3개이상
 * 
 * a{,4} 이 문법은 존재하지 않음.
 */
function test12() {
    var s = "aa aba abba abbba";
    // area.innerHTML = s.replace(/ab{2}a/g, "<mark>$&</mark>");
    // area.innerHTML = s.replace(/ab{1,2}a/g, "<mark>$&</mark>");
    // area.innerHTML = s.replace(/ab{2,}a/g, "<mark>$&</mark>");

    // area.innerHTML = s.replace(/ab*a/g, "<mark>$&</mark>");
    // area.innerHTML = s.replace(/ab{0,}a/g, "<mark>$&</mark>");
    // area.innerHTML = s.replace(/ab+a/g, "<mark>$&</mark>");
    // area.innerHTML = s.replace(/ab{1,}a/g, "<mark>$&</mark>");
    area.innerHTML = s.replace(/ab?a/g, "<mark>$&</mark>");
    area.innerHTML = s.replace(/ab{0,1}a/g, "<mark>$&</mark>");

    // 숫자로시작하고, 영문자3글자이상 나오고 .마침표로 끝나는 문자열을 검사하는 정규식 작성
    // true : 1abc안녕하세요. 3xyzkkk. 1ABCD.
    // false : 100 1cbㅋㅋㅋ. 아아아아. 
    var re = /^\d[A-Za-z]{3,}.*\.$/;
    ["1abc안녕하세요.", "3xyzkkk.", "1ABC."].forEach(function (s) {
        console.log(re.test(s)); // true
    });

    ["100", "1cbㅋㅋㅋ.", "아아아아.", "1가나다abc.", "123abc다나가."].forEach(function (s) {
        console.log(re.test(s)); // false
    });
};

function testSSN() {
    var val = ssn.value;
    // var re = /^\d\d\d\d\d\d-\d\d\d\d\d\d\d$/;
    // var re = /^\d{6}-\d{7}$/;
    // var re = /^\d{6}-[1234]\d{6}$/; // 999893-1234567
    var re = /^\d{2}(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])-[1234]\d{6}$/;

    if (re.test(val))
        alert('유효한 주민번호입니다.');
    else
        alert('주민번호가 유효하지 않습니다.');

}
/**
 * Look Around : 문자열 검사후 최종패턴에는 포함되지 않는다.
 * 
 * 1. look ahead
 *   - 000(?=(re)) : 000다음 re일치
 *   - 000(?!(re)) : 000다음 re일치하지 않아야함. 000만 최종반환
 * 2. look behind
 *   - (?<=(re))000 : 000이전 re 일치. 000만 최종반환
 *   - (?<!(re))000 : 000이전 re일치하지 않아야함. 000만 최종 반환
 */
function test13() {
    var s = "hello world hello Tom hello Jane";
    // area.innerHTML = s.replace(/hello(?=( world))/g, '<mark>$&</mark>');
    // area.innerHTML = s.replace(/hello(?!\sworld)/g, '<mark>$&</mark>');
    s = "hello wolrd lotte world t world"
    // area.innerHTML = s.replace(/(?<=hello )world/g, '<mark>$&</mark>');
    area.innerHTML = s.replace(/(?<=hello )world/g, '<mark>$&</mark>');

}


/**
 * userId가 8~12자리, 영문자/숫자/특수문자 하나이상 포함, 영문자로 시작할때만 유효하다.
 * 유효하지 않다면, 폼이 제출되어서는 안된다.
 */
document.querySelector("form").onsubmit = function () {
    var val = userId.value;
    //1.userId가 8~12자리 
    if (/^.{8,12}$/.test(val) == false) {
        alert("아이디는 8~12자리여야 합니다.");
        return false;
    }
    //2.영문자/숫자/특수문자 *!^/@$ 하나이상 포함
    if (
        ((/[a-zA-Z]/.test(val)) &&
            (/[0-9]/.test(val)) &&
            (/[*!^/@$]/.test(val))) == false
    ) {
        alert("아이디는 영문자/숫자/특수문자 *!^/@$ 하나이상 포함해야 합니다.");
        return false;
    }
    //3.영문자로 시작
    if (/ /.test(val) == false) {
        alert("아이디는 영문자로 시작해야 합니다.");
        return false;
    }
};
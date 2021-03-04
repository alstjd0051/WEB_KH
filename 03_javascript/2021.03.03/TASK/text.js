function oneCheckbox(ckBox) { //체크박스가 하나만 선택되도록 하는 함수 oneCheckbox() 만들기
    //매개변수 ckBox는 체크박스를 받는 것이다.
    var ckBoxArr = document.getElementsByName("product");
    //alert(ckBoxArr.length); // 6
    for (var i = 0; i < ckBoxArr.length; i++) //for문을 돌면서 체크되지 않은 것을 모두 체크해제 한다.
        (ckBoxArr[i] != ckBox) && (ckBoxArr[i].checked = false);
}
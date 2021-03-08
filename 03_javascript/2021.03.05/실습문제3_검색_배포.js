//요구한 내용을 변수, 연산자, 제어문 등을 사용하여 실행되게 하시오.
//제목 체크시, titleBox 만 보여지게
//날짜 체크시, dateBox 만 보여지게
//작성자 체크시, writerBox 만 보여지게 함
function showDiv1() {
    var box = document.getElementsByClassName("box");

    for (var i = 0; i < box.length; i++) {
        box[i].style.display = 'none';
    }
    if (title.checked) {
        box[0].style.display = 'block';
    } else if (date.checked) {
        box[1].style.display = 'block';
    } else if (writer.checked) {
        box[2].style.display = 'block';
    }
}
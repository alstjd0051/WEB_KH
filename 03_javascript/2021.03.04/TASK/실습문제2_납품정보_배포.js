function showVal() {
    pVal.innerHTML = document.getElementById("productLevel").value;
}

function printProduct() {
    var boo = confirm("입력하시겠습니까?")
    if (boo) {
        result.innerHTML += "상품명 : " +
            productName.value + '<br>' +
            "납품등급 : " + productLevel.value + "<br>" +
            "납품수량 : " + productAmount.value + "<br>" +
            "기타사항 : " + message.value;
    }
}
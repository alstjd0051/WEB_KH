function printValue() {
    var nameTF = document.getElementsByTagName("input");
    var userName = nameTF[0].value;
    var productName = document.getElementById("pname").value;
    var priceTF = document.getElementsByName("price");
    var price = priceTF[0].value;

    var area = document.getElementById("area");
    area.innerHTML = "구입자 : " + userName + "님<br>";
    area.innerHTML += "구입상품 : " + productName + "<br>";
    area.innerHTML += "구매가격 : " + price + "만원"
}
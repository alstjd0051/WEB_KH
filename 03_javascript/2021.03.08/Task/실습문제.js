//클로져함수의 변수출력
var a = 1;
var funcX = function () {
    var a = 100;
    return function () {
        console.log(a);
    }
}

var b = 9;
var funcY = function () {
    var b = 99;
    return function (b) {
        console.log(b);
    }
}

var funcZ = function (k) {
    return function (num) {
        console.log(k * num);
    }
}
function mkAddFunc() {
    var sum = 0;
    return function () {
        if (isNaN(myadder.value)) return;
        //input타입과 상관없이 value의 타입은 string임.
        sum += Number(myadder.value);
        alert(sum);
    }
}
var addFunc = mkAddFunc();

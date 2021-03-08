var a = 1;
var funcX = function () {
    var a = 100;
    return function () {
        console.log(a);
    };
};

//funcY함수 주의
var b = 9;
var funcY = function () {
    var b = 99;
    return function (b) {
        console.log(b);
    };
};

var funcZ = function (k) {
    return function (num) {
        console.log(k * num);
    };
};


function mkAddFunc() {
    sum = 0;
    return function () {
        sum += Number(myadder.value);
        alert(sum);
    };
}
var addFunc = mkAddFunc();
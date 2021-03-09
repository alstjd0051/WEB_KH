function test1() {
    var pets = [
        {
            name : '민성입니다',
            breed : 'Human',
            weight : '68',
        },
        {
            name : '나몰라',
            breed : 'Human',
            weight : '53',
        },
        {
            name : '빡빡이 아저씨',
            breed : 'Human',
            weight : '58',
        }
    ];
    console.log(pets);

    for(var i in pets) {
        // console.log(pets[i].name);
        pets[i].bark = function() {
            return this.weight > 60 ? '멍멍' : '왈왈';
        };
        console.log(pets[i].name + "이/가" + pets[i].bark() + "짖는다");
    }
}

/**
 * (this용법4)생성자함수안의 this는 현재객체를 가리킨다.
 * 생성자함수의 첫글자는 대문자는 작성하는 것
 * - new 연산자와 함께 호출
 */
function Pet(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function() {
        return this.weight > 10 ? '멍멍' : '왈왈';
    };
}

function test2() {
    var pets = [
        new Pet('부리부리', '포매라니안', 4.5),
        new Pet('까미', '요크셔테리어', 3),
        new Pet('콩돌', '리트리버', 25)
    ];
    console.log(pets);
    for(var i in pets) {
        console.log(pets[i].name + "이/가" +  pets[i].bark() + " 짖는다.");
    }
}
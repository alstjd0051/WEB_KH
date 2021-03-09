/**
 * (속성명:속성값)으로 구성된 요소를 관리하는 객체
 * - 속성명 : 식별자
 * - 속성값 : 모든 타입가능
 */

function test1() {
    var obj1 = {
        name: '홍길동',
        "age": 33,
        married: true,
        hobby: ['축구', '농구', '야구'],
        pet: {
            name: '구리구리',
            breed: '말티즈'
        },
        123: 456, // 숫자 속성명 가능
        "foo-bar": 'ㅋㅋㅋㅋ'
    };
    var obj2 = new Object();
    obj2.pname = '말린망고';
    obj2.price = 3000;
    obj2.ingredient = ['mango', 'sugar']; //dot notation
    obj2['origin'] = '필리핀' //bracket notation. 단 속성명은 문자열로 전달되어야 한다.
    // obj2.ty-pe = '피클';
    obj2["ty-pe"] = '피클';

    console.log(obj1);
    console.log(obj2);

    console.log(obj1.name);
    console.log(obj1.age);
    console.log(obj1.married);
    console.log(obj1.hobby[0]);
    console.log(obj1.pet);
    console.log(obj1.pet.name);

    console.log(obj2["ty-pe"]);
}
/**
 * 객체의 속성값이 function인 경우, 메소드라 함.
 */
function test2() {
    var pet = {
        petName: '구리구리',
        eat: function (food) {
            // Uncaught ReferenceError: petName is not defined
            console.log(this.petName + "이/가 " + food + "를 먹는다, 냠냠!");
            //(this용법3) 메소드에서 this는 현재객체를 가리킨다.

        }
    };

    console.log(pet);
    console.log(pet.eat); // function(food){ console.log(food + "를 먹는다, 냠냠!"); }

    pet.eat('개껌');
    pet["eat"]("갈뷔");

    var propName = 'eat';
    pet[propName]('개우유');

}
/**
 * 단순 for문이 아닌 for in 문을 사용해서 모든 속성을 순회가능
 */

function test3() {
    game = {
        title: "DIABLO",
        price: 9900,
        lang: ["ko", "en", "cn"],
        run: function () {
            console.log(this.title + "을 실행합니다...");
            //시작시각 기록
            this["start-time"] = new Date();
        },
        shutdown: function () {
            console.log(this.title + "을 종료합니다...");
            //종료시각 기록
            this["end-time"] = new Date();
            //게임시간 계산
            var duration = (this["end-time"] - this["start-time"]) / 1000 / 60; //분단위
            duration = Math.floor(duration * 10) / 10;
            console.log(duration + "분동안 게임하셨습니다.");
        }
    };

    for (var key in game) {
        console.log(key + " : " + game[key]);
    }

    //game객체에 run메소드를 실행하면, start-time속성에 현재시각을 기록하세요.
    //game객체에 shutdown메소드를 실행하면, end-time속성에 끝낸 시각을 기록하세요.
    game.run();
}

function test4() {
    //game객체가 할당된 상태에서만 shutdown실행!
    game && game.shutdown();
}

/**
 * 객체 생성이후, 자유롭게 속성을 추가하거나 삭제할 수 있다.
 */
function test5() {
    var student = new Object();
    student.name = '홍길동';
    student.class = 'M';
    student.no = 33;
    console.log(student);


    //속성 제거
    delete student.no;

}


/**
 * 모든객체가 object를 상속한다.
 * toString Override
 * 
 * javascript는 prototype기반으로 상속모델을 제공한다.
 */
function test6() {
    var notebook = {
        title: '오늘의 일기',
        content: '오늘은 자바스크립트와 즐거운 하루를 보냈다.',
        date: new Date(),
        toString: function () {
            // return "{ title = " + this.title + ", content = " + this.content + ", date = " + this.date + "}";
            var str = "";
            for (var key in this) {
                key != "toString" && (str += key + " : " + this[key] + " ");
            }
            return str;
        }
    };
    console.log("notebook : " + notebook.toString()); // notebook : [object Object]
    console.log(notebook);

}
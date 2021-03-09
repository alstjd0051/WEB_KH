/**
   * Student생성자함수를 통해 점수데이터를 관리하세요.
   * - java
   * - oracle
   * - html5
   * - css3
   * - javascript
   * - getSum
   * - getAvg : 반올림 소수점 첫째자리
   * - toString
   */
function test1() {
    //1.객체배열 생성 및 요소추가
    var students = [];
    students.push(new Student('김동현', 90, 56, 56, 44, 34));
    students.push(new Student('홍길동', 45, 76, 34, 33, 56));
    students.push(new Student('유관순', 76, 34, 54, 56, 22));
    students.push(new Student('임꺽정', 43, 77, 12, 76, 34));
    students.push(new Student('윤봉길', 76, 88, 55, 34, 54));
    students.push(new Student('안중근', 98, 23, 76, 23, 45));
    students.push(new Student('신사임당', 34, 33, 13, 54, 45));
    students.push(new Student('세종대왕', 56, 56, 34, 77, 32));
    students.push(new Student('이순신', 34, 88, 77, 78, 22));
    students.push(new Student('이황', 88, 90, 99, 98, 87));

    //2.반복문을 통해 객체배열 순회. 요소별 toString메소드 호출하기
    students.forEach(function (student, i) {
        console.log(student.toString());
    });
}
/**
 * Student 생성자 함수 선언
 */
function Student(name, java, oracle, html5, css3, javascript) {
    this.name = name;
    this.java = java;
    this.oracle = oracle;
    this.html5 = html5;
    this.css3 = css3;
    this.javascript = javascript;
    this.getSum = function () {
        return this.java + this.oracle + this.html5 + this.css3 + this.javascript;
    };
    this.getAvg = function () {
        return Math.round(this.getSum() / 5 * 10) / 10;
    };
    this.toString = function () {
        return "이름=" + this.name + ", java=" + this.java + ", oracle=" + this.oracle
            + ", html5=" + this.html5 + ", css3=" + this.css3 + ", javascript=" + this.javascript
            + ", 총점=" + this.getSum() + ", 평점=" + this.getAvg();
    }
}
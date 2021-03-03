function test2() {
  var liArr = document.getElementsByTagName("li");
  // console.log(liArr);
  // console.log(liArr[0]);
  // console.log(liArr[1]);
  // console.log(liArr[2]);
  // console.log(liArr[3]);
  // console.log(liArr[4]);
  var b = 50;
  for (var i = 0; i < liArr.length; i++) {
    console.log(liArr[i]);
    liArr[i].style.color = "rgb(130, 220, " + b + ")";
    b += 50;
  }
}
/* 
   document객체 : 작성한 html5의 태그를 파싱해서, 변환된 js obect를 가지고 있는 객체.
   DOM Documetn Object Model
*/

function test1() {
  var li = document.getElementById("myli2");
  //존재하지 않는 객체 null 
  console.log(li);  //태그객체
  //객체구조로 열람
  console.dir(li);
  //스타일 속성 변경
  li.style.color = '#fff';
  li.style.backgroundColor = "magenta";
}
/**
  * getElementsByTagName는 복수개의 요소를 가진 배열객체(짜가)를 리턴한다.
  */
function test2() {
  var liArr = document.getElementsByTagName("li");
  // console.log(liArr);
  // console.log(liArr[0]);
  // console.log(liArr[1]);
  // console.log(liArr[2]);
  // console.log(liArr[3]);
  // console.log(liArr[4]);
  var b = 50;
  for (var i = 0; i < liArr.length; i++) {
    console.log(liArr[i]);
    liArr[i].style.color = "rgb(130, 220, " + b + ")";
    b += 50;
  }
}
/**
 * document.getElementsByClassName("클래스명")
 */
function test3() {
  var groups = document.getElementsByClassName("group");
  console.log(groups);

  for (var i = 0; i < groups.length; i++) {
    var li = groups[i];
    li.style.color = "springgreen";
  }
}
function test4() {
  var hobbies = document.getElementsByName("hobby");
  console.log(hobbies);

  for (var i = 0; i < hobbies.length; i++) {
    var hobby = hobbies[i];
    if (hobby.checked) {
      console.log(hobby.nodeValue); // input 태그의 value속성값
    }
  }
}
/**
 * #userEmail을 입력하고, 확인을 눌렀을 때 사용자 입력값을 경고 창에 출력하세요.
 * - 아이디로 접근
 * - 태그명으로 접근
 * - name값으로 접근
 */
// function test5() {
//   /**
//    * 아이디로한다면
//    */
//   // var userEmail = document.getElementById("userEmail");
//   // alert(userEmail.nodeValue);
//   var inputs = document.getElementsByTagName("input");
//     console.log(inputs);
//     alert(input[7].value);
//   // var userEmailed = document.getElementsByName("userEmail")
//   // console.log(userEmailed);

//   // for( var i = 0; i< userEmailed.length; i++) {
//   //   if (userEmailed.email) {
//   //     console.log(userEmailed.nodeValue);
//   //   }
//   // }
// }

function test5() {
  //   var userEmail = document.getElementById("userEmail");
  //alert(userEmail.value);
  // var inputs = document.getElementsByTagName("input");
  // console.log(inputs);
  // alert(inputs[7].value);
  var userEmails = document.getElementsByName("userEmail");
  console.log(userEmails);
  alert(userEmails[0].value); //getter

  //속성은 getter/setter처리 가능
  userEmails[0].value = '???'; //setter 초기화 value속성값을 지워버린다. 
}

function test6() {
  // var amount = document.getElementById("amount");
  // var result = document.getElementById("result");
  // id속성으로 변수 선언없이 태그객체에 접근가능(비표준)
  //시작태그/종료태그사이 내용으로 추가
  result.innerHTML = amount.value;
}

/**
 * [name=subject]를 전체선택/해제
 * 
 * css선택자로 요소접근하기
 * - document.querySelector(선택자) : 선택자와 일치하는 하나의 요소를 리턴
 * - document.querySelectorAll(선택자) : 선택자와 일치하는 모든 요소를 유사배열로 리턴
 */
function test7() {
  // var subjects = document.getElementsByName("subject");
  var subjects = document.querySelectorAll("[name=subject]");
  console.log(subjects);
  var checkAll = document.querySelector("#checkAll");
  console.log(checkAll);
  for (var i = 0; i < subjects.length; i++) {
    //setter로써 checked : #checkAll의 checked여부(true | false)를 세팅
    subjects[i].checked = checkAll.checked;
    // 부모 td요소 클래스값제어
    checkAll.checked ?
      subjects[i].parentNode.classList.add("on") :
      subjects[i].parentNode.classList.remove("on");
  }
}
/**
 * 개별체크박스를 통해 전체선택 체크박스 제어하기
 */
// function test8(){
//   var subjects = document.querySelectorAll("[name=subject]");
//   var checkedSubjects = document.querySelectorAll("[name=subject]:checked");
//   console.log(subjects);
//   console.log(checkedSubjects);
//   checkAll.checked = (subjects.length == checkedSubjects.length);
// }

// function test8() {
//   var subjects = document.querySelectorAll("[name=subject]");
//   for (var i = 0; i < subjects.length; i++) {
//     if (!subjects[i].checked) {
//       checkAll.checked = false;
//       return; // 조기리턴
//     }
//   }
//   checkAll.checked = true;
// }
function test8(chk) {
  // this로 던져진 tag객체
  // console.log(chk);
  // console.dir(chk);
  //부모 td태그의 class값 제어
  var parentTd = chk.parentNode;
  console.log(parentTd);
  //태그객체의 classList속성을 통해서 다음 코드를 개선하라.
   //replace(oldClass, newClass) : oldClass를 newClass로 교체
   parentTd.classList.toggle("on");
       // if(chk.checked)
        // parentTd.classList.add("on");
        // parentTd.className = "on serious"; // 기존 class값이 제거되지 않도록 처리
    // else
        // parentTd.classList.remove("on");
        // parentTd.className = "serious";


    //전체 체크박스 제어









  //전체체크박스 제어
  var subjects = document.querySelectorAll("[name=subject]");
  console.log(subjects);
  for (var i = 0; i < subjects.length; i++) {
    if (subjects[0].checked == true && subjects[1].checked == true && subjects[2].checked == true) {
      checkAll.checked = true;
      console.log(1);
    }
    else
      checkAll.checked = false;
  }
}
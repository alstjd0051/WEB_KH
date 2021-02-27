function test2(){
    var liArr = document.getElementsByTagName("li");
    // console.log(liArr);
    // console.log(liArr[0]);
    // console.log(liArr[1]);
    // console.log(liArr[2]);
    // console.log(liArr[3]);
    // console.log(liArr[4]);
    var b = 50;
    for(var i = 0; i < liArr.length; i++){
      console.log(liArr[i]);
      liArr[i].style.color = "rgb(130, 220, " + b + ")";
      b += 50;
    }
  }

  function test1(){
    var li = document.getElementById("myli111111");
    //존재하지 않는 객체 null 
    console.log(li);  //태그객체
    //객체구조로 열람
    console.dir(li);
    //스타일 속성 변경
    li.style.color = '#fff';
    li.style.backgroundColor = "magenta";
  }
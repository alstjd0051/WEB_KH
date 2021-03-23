function checkBtn() {
    $("[name=check]")
      .filter(":checked")
      .each(function (index, elem) {
        console.log($(this).val() + "번");
      });
  }

  function selectBtn() {
    $("option")
      .filter(":selected")
      .each(function (index, elem) {
        console.log($(this).html());
      });
  }
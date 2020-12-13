'use strict';

localStorage.clear();
var myArray = [];


a_res.onclick = function() {
  window.open("modal.html","","width=900,height=200,resizable=yes,scrollbars=yes,status=yes")

}


send.onclick = function(e) {
  e.preventDefault();


  let nalichie_nom = [];
  let selectedCheckBoxes = document.querySelectorAll("input[type=checkbox");
  for (let j = 0; j < selectedCheckBoxes.length; j++) {
    if (selectedCheckBoxes[j].checked) {
      nalichie_nom.push(selectedCheckBoxes[j].value);
    }
  }

  let eat = document.getElementsByName("eat");
  let eatCheck;
  for (let j = 0; j < eat.length; j++) {
    if (eat[j].checked) {
      eatCheck = eat[j].value;
    }
  }

  var myObj = {
    name: document.getElementsByName('name')[0].value,
    email: document.getElementsByName('email')[0].value,
    tel: document.getElementsByName('tel')[0].value,
    nalichie_nom: nalichie_nom,
    color_room: document.getElementsByName('color_room')[0].value,
    eat: eatCheck,
    min_price: document.getElementsByName('min_price')[0].value,
    max_price: document.getElementsByName('max_price')[0].value

  };
  console.log(myObj);
  myArray.push(myObj);
  localStorage.MyRecord = JSON.stringify(myArray);
  window.open("modal.html","","width=800,height=300,resizable=yes,scrollbars=yes,status=yes"

  )


}


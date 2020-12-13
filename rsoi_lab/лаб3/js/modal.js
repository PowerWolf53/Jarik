'use strict';

  var MyArray = [];

  function init() {


    if (localStorage.MyRecord) {
      MyArray = JSON.parse(localStorage.MyRecord);
      for (var i = 0; i < MyArray.length; i++) {
        prepareTableCell(MyArray[i].name, MyArray[i].email, MyArray[i].tel, MyArray[i].nalichie_nom, MyArray[i].color_room, MyArray[i].eat, MyArray[i].min_price, MyArray[i].max_price);
      }
    }
  }

  function prepareTableCell(name, email, tel, nalichie_nom, color_room, eat, min_price, max_price) {
    var table = document.getElementById("modal");
    var row = table.insertRow();
    var nameCell = row.insertCell(0);
    var emailCell = row.insertCell(1);
    var telCell = row.insertCell(2);
    var nalichie_nomCell = row.insertCell(3);
    var color_roomCell = row.insertCell(4);
    var eatCell = row.insertCell(5);
    var min_priceCell = row.insertCell(6);
    var max_priceCell = row.insertCell(7);
    nameCell.innerHTML = name;
    emailCell.innerHTML = email;
    telCell.innerHTML = tel;
    nalichie_nomCell.innerHTML = nalichie_nom;
    color_roomCell.style.background = color_room;
    eatCell.innerHTML = eat;
    min_priceCell.innerHTML = min_price;
    max_priceCell.innerHTML = max_price;



    let ol = document.querySelector("ol");
    let li = document.createElement("li");
    li.innerHTML = name;
    results.appendChild(ol);
    ol.appendChild(li);

  }
  window.onload = function() {
    init();
  }

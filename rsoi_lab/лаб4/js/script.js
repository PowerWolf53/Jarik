'use strict';
window.onload = function() {

  let choice;
  let tr;
  let allColor;
  let allBack;
  let allSize;

  function choiseSelect(selectName) {
    selectName.addEventListener("change", function() {
      for (var i = 0; i < selectName.options.length; i++) {
        if (selectName.options[i].selected) {
          choice = selectName.options[i].innerHTML;
        }
      }
      switch (selectName) {
        case selectColorText:
          tr = document.getElementsByTagName("tr")[0];
          tr.style.color = choice;
          p1.style.color = choice;
          p1.innerText = tr.children[0].innerText;
          allColor = choice;
          break;
        case selectColorBackground:
          tr = document.getElementsByTagName("tr")[1];
          tr.style.background = choice;
          p2.style.background = choice;
          p2.innerText = tr.children[0].innerText;
          allBack = choice;
          break;
        case selectFont:
          tr = document.getElementsByTagName("tr")[2];
          tr.style.fontSize = choice;
          p3.style.fontSize = choice;
          p3.innerText = tr.children[0].innerText;
          allSize = choice;
          break;
      }
    });
  }

  choiseSelect(selectColorText);
  choiseSelect(selectColorBackground);
  choiseSelect(selectFont);

  btn.onclick = function(e) {
    e.preventDefault();
    table.style.background = allBack;
    table.style.color = allColor;
    table.style.fontSize = allSize;
  }

  btnAdd.onclick = function(e){
    e.preventDefault();
    table.insertAdjacentHTML("afterBegin", `<tr><td>${p2.innerText}</td><td></td><tr>`);
    table.style.background = allBack;
    table.style.color = allColor;
    table.style.fontSize = allSize;
  }

}

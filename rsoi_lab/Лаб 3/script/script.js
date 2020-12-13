let MyArray = [];

function init() {
    if (localStorage.MyRecord) {
        MyArray = JSON.parse(localStorage.MyRecord);
        for (let i = 0; i < MyArray.length; i++) {

        }
    }
}

function checkForm() {
    let username = document.getElementById('username').value;
    let phone = document.getElementById('phone').value;
    let mail = document.getElementById('email').value;
    let text_area = document.getElementById('textarea').value;

    let check1 = document.getElementById('ten').checked;
    let check2 = document.getElementById('twenty').checked;
    let check3 = document.getElementById('forty').checked;
    let check4 = document.getElementById('sixty').checked;

    let display = document.getElementById('display').value;

    let checkbox1 = document.getElementById('poznov').checked;
    let checkbox2 = document.getElementById('razv').checked;
    let checkbox3 = document.getElementById('info').checked;
    let checkbox4 = document.getElementById('analys').checked;
    let checkbox5 = document.getElementById('info-raz').checked;

    if (username == "" || phone == "" || mail == "" || text_area == "") {
        alert('Поля не заполнены');
        return false;
    } else if (check1 == false && check2 == false && check3 == false && check4 == false) {
        alert('Не выбран возраст');
        return false;
    } else if (checkbox1 == false && checkbox2 == false && checkbox3 == false && checkbox4 == false && checkbox5 == false) {
        alert('Не выбраны отделы');
        return false;
    } else {
        let age = '';
        if (check1 == true) { age += "<100" } else if (check2 == true) { age += "100-300" } else if (check3 == true) { age += "300-600" } else if (check4 == true) { age += ">600" }

        let type = '';
        if (checkbox1 == true) { type += "Молочный " }
        if (checkbox2 == true) { type += "Хлебо-булочный " }
        if (checkbox3 == true) { type += "Мясной " }
        if (checkbox4 == true) { type += "Рыбный " }
        if (checkbox5 == true) { type += "Готовой продукции " }

        let MyObj = {
        	username: username, 
        	age: age, 
        	phone: phone, 
        	display: display, 
        	mail: mail, 
        	brand: type, 
        	text_area: text_area 
        };

        MyArray.push(MyObj);
        localStorage.MyRecord = JSON.stringify(MyArray);

        document.getElementById("username").value = "";
        document.getElementById("age").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("display").value = "";
        document.getElementById("mail").value = "";
        document.getElementById("text_area").value = "";

        return true;
    }
}

window.onload = function() {
    init();
}
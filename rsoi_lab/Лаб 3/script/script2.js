let MyArray = [];

function init() {
    if (localStorage.MyRecord) {
        MyArray = JSON.parse(localStorage.MyRecord);
        for (let i = 0; i < MyArray.length; i++) {
            prepareTableCell(MyArray[i].username, MyArray[i].age, MyArray[i].phone, MyArray[i].display, MyArray[i].mail, MyArray[i].brand, MyArray[i].text_area);
        }
    }
}

function prepareTableCell(username, age, phone, display, mail, brand, text_area) {
    let table = document.getElementById("regtable");
    let row = table.insertRow();
    let usernameCell = row.insertCell(0);
    let ageCell = row.insertCell(1);
    let hrefCell = row.insertCell(2);
    let displayCell = row.insertCell(3);
    let mailCell = row.insertCell(4);
    let brandCell = row.insertCell(5);
    let text_areaCell = row.insertCell(6);
    usernameCell.innerHTML = username;
    ageCell.innerHTML = age;
    hrefCell.innerHTML = phone;
    displayCell.innerHTML = display;
    mailCell.innerHTML = mail;
    brandCell.innerHTML = brand;
    text_areaCell.innerHTML = text_area;

    let placeToApp =  document.querySelector("#optgroup optgroup");
     let newSection = document.createElement('option');
     newSection.innerHTML = username;
    placeToApp.appendChild(newSection);
}
window.onload = function() {
    init();
}
// подключение express фрайм 
const express = require("express");
// подключаем парсер для чтения параметров post и get запросов
const bodyParser = require('body-parser');
// создаем объект приложения
const app = express();
// подключаем модуль для работы с файлами
const fs = require("fs");
// порт на котором работает сервер
var port = 81;
if (process.argv[2] != undefined) {port = process.argv[2]; }

const fileBefore = __dirname+"/data/before.tbl";
const fileAfter = __dirname+"/data/after.tbl";

app.use(bodyParser.urlencoded({ extended: false }));
// определяем обработчик для маршрута "/public"
app.use("/public",express.static("../public/"));
// определяем обработчик для маршрута "/"
app.use("/",express.static("../public/html/"));

// функция сохранения массива в файле
function saveTable(file, jsonTable, resp, html) {
	fs.writeFile(file, jsonTable, function(error){
		console.log(new Date() + ' Write file ' + file);
    	if(!error) {
    		console.log(new Date() + ' Write file ' + file + ' success');
    		console.log(new Date() + ' response sending');
	    	resp.send(html);// отправляем ответ
	    	console.log(new Date() + ' response sending success');
    	} 
    	else {
    		console.log(new Date() + ' Error! Something broke!');
    		response.status(404).send(' Something broke!');// отправляем ошибку	
    	}
	});
}

// определяем обработчик post для маршрута "/createTable"
app.post("/createTable", function(request, response){
	console.log(new Date() + ' -------------------- POST createTable');

	let decim = 0;
	let min = 10;
	let max = 100;

	if (request.body.decim != undefined) decim = Number(request.body.decim);
	if (request.body.min != undefined) min = Number(request.body.min);
	if (request.body.max != undefined) max = Number(request.body.max);
	let responseText = "";

	console.log(new Date() + ' create random table');
	let num = [];// массив для случайных числ в диапазоне  [min, max]
	let j = 0;
	for (var i = 0; i < 100; i++) {
		if (j == i) {
			responseText += "<tr>";
			j +=10;
		}
		responseText += "<td>";
		num [i] = Math.random()* (max - min) + min;// заполняем массив
		responseText += num[i].toFixed(decim) + "</td>";//сколько знаков после ,
		if (j == i) {
			responseText += "</tr>";
		}
	}
	console.log(new Date() + ' end create table');

	let str = JSON.stringify(num);
	saveTable(fileBefore, str, response, responseText);
});

// функции для сортировки массива
function ascending(a, b) {
  return a - b;
}
function descending(a, b) {
  return b - a;
}

// определяем обработчик post для маршрута "/showTable"
app.post("/showTable", function(request, response){
	let decim = 0;
	if (request.body.decim != undefined) decim = Number(request.body.decim);
	let sort = 'ascending';
	if (request.body.sort != undefined) sort = request.body.sort;
	let responseText = '';

	console.log(new Date() + ' -------------------- POST showTable ' + sort);
	let obj;
	let data;
	try	{
		console.log(new Date() + ' Read file ' + fileBefore);
		data = fs.readFileSync(fileBefore, "utf8");
	}catch(e){
		console.log(new Date() + ' showTable error! Something broke!');
		response.status(404).send('Something broke!');// отправляем ошибку
		return;
	}
	console.log(new Date() + ' Read file ' + fileBefore + ' success');
	
	obj = data.toString().split(/(?={")/).map(x => JSON.parse(x));
	let num = obj[0];
	

	//сортируем массив
	console.log(new Date() + ' Sort array');
	if (sort == 'ascending') num.sort(ascending)
	else num.sort(descending);
	
	let j = 0;
	for (var i = 0; i < 100; i++) {
		if (j == i) {
			responseText += "<tr>";
			j +=10;
		}
		responseText += "<td>" + num[i].toFixed(decim) + "</td>";
		if (j  == i) {
			responseText += "</tr>";
		}
	}

	let str = JSON.stringify(num);
	saveTable(fileAfter, str, response, responseText);
});

// начинаем прослушивать подключения
app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
});
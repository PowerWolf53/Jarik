function showText() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "http://127.0.0.1:8000/read", true);
  xhr.onerror = function() {
    console.log("Error: ERR_CONNECTION_REFUSED");
  };
  xhr.onload = () => {
    let dataFromServer = JSON.parse(xhr.responseText);

    $("#initial").val(dataFromServer.initial);
    $("#modified").val(dataFromServer.modified);
  };
  xhr.send();
  console.log("run");
}

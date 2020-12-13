var resultSuccess = false;
var decimal = Number($("input:checkbox:checked").val());


$(document).ajaxSuccess(function () {
    resultSuccess = true;
});
$(document).ajaxError(function () {
    resultSuccess = false;
});

$(document).ajaxStop(function () {
    if (!resultSuccess) {
        var res = confirm('An error has occurred. Reload page?');
        if (!res) {
            var url = "error.html";
            $(location).attr('href', url);
        } else {
            location.reload();
        }
    }
});

function createTable() {
    resultSuccess = false;
    $.ajax({
        url: "/createTable",
        method: "POST",
        data: { decim: decimal, min: 1, max: 17 },
        success: function (data) {
            $("#labelRnd").html('Новая таблица');
            $("#rndTable").html(data);
            $("#rndTable").show();
            $("#labelView").html('');
            $("#sortTable").hide();
            $("#sortTable").html('');
        }
    });
}
function showtable(mode = 'ascending') {
    resultSuccess = false;
    $.ajax({
        url: "/showTable",
        method: "POST",
        data: { sort: mode, decim: decimal },
        success: function (data) {
            $("#labelView").html('Таблица ' + mode);
            $("#sortTable").html(data);
            $("#sortTable").show();
        }
    });
}
$("input:checkbox").change(function () {
    decimal = Number($(this).val())
});
$("#createBtn").click(function event() { createTable() });
$("#ascendingBtn").click(function event() { showtable('ascending') });
$("#descendingBtn").click(function event() { showtable('descending') });
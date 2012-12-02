/*jslint plusplus: true, browser: true, devel: true */

var znak = false; // false, если до этого либо ничего не записывали, либо вводили число. true, если до этого был введен знак 
var operand = 0; // сохраняет текущее значение
var s = ""; // последний введенный знак0

function createNumber() {
    "use strict";
    var n = this.value,
    	result = ($(".result")).val();

    if (znak) {
        result = n;
        znak = false;
    } else {
        if (result === "0") {// если был ноль - меняем его на число
            result = n;
        } else {// иначе приписываем число
            result = result + n;
        }
    }
	($(".result")).val(result);
}

function Operation() {
    "use strict";
    var Op = this.value,
        result = ($(".result")).val();
    if (znak && s !== "=") {// если ввели, например, "++"
        result = operand;
    } else {
        znak = true;
        if (s === "+") {
            operand = operand + parseFloat(result);
        }
        if (s === "-") {
            operand = operand - parseFloat(result);
        }
        if (s === "/") {
            operand = operand / parseFloat(result);
        }
        if (s === "*") {
            operand = operand * parseFloat(result);
        }
        if (s === "=" || s === "") {
            operand = parseFloat(result);
        }
        result = operand;
        s = Op;
    }
    ($(".result")).val(result);
}

function point() {
    "use strict";
    var result = ($(".result")).val();
    if (znak) {
        result = "0.";
        znak = false;
    } else {
        if (result.indexOf(".") === -1) { // если точки еще не было - дописываем. Иначе - игнорируемы
            result = result + ".";
        }
    }
    ($(".result")).val(result);
}

$(document).ready(function () {
    "use strict";
    var $button_number = $(".button_type_number"),
        $button_znak = $(".button_type_znak"),
        $button_point = $(".button_type_point");

    $('#Form').submit(function () { "use strict"; return false; });

    $button_number.each(function (index, element) {
        $(element).click(createNumber);
    });
    $button_znak.each(function (index, element) {
        $(element).click(Operation);
    });
    $button_point.each(function (index, element) {
        $(element).click(point);
    });
});
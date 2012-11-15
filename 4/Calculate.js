/*jslint plusplus: true, browser: true, devel: true */

document.getElementById('Form').onsubmit = function() { return false; };

var znak = false; // false, если до этого либо ничего не записывали, либо вводили число. true, если до этого был введен знак 
var operand = 0; // сохраняет текущее значение
var s = ""; // последний введенный знак0

function createNumber(n) {
    "use strict";
    var result = (document.getElementsByName("res")[0]).value;

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
	(document.getElementsByName("res")[0]).value = result;
	//alert("result " + result);
}

function Operation(Op) {
    "use strict";
    var result = (document.getElementsByName("res")[0]).value;
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
    (document.getElementsByName("res")[0]).value = result;
}

function point() {
    "use strict";
    var result = (document.getElementsByName("res")[0]).value;
    if (znak) {
        result = "0.";
        znak = false;
    } else {
        if (result.indexOf(".") === -1) { // если точки еще не было - дописываем. Иначе - игнорируемы
            result = result + ".";
        }
    }
    (document.getElementsByName("res")[0]).value = result;
}

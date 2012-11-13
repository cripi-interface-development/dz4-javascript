// JavaScript Document

var stack = {};
stack['result'] = 0; //Почему результат становится NaN?
stack['elements'] = ['0','+'];
stack['get_result'] = function(){
	return stack['result'];
	};
var numberFlag = false //Дописываем цифры если тру, начинаем писать заново если фалс
function getOperation(){
	/*
	Выполняет операцию для последних введёных чисел
	*/
	var l = stack['elements'][stack['elements'].length];
	var operation = stack['elements'][l-1] ;
	if (operation = 'add'){
		stack['result'] = parseInt(stack['elements'][l-2]) + parseInt(stack['elements'][l])
	}
	else if (operation = 'sub') {
		stack['result'] = parseInt(stack['elements'][l-2]) - parseInt(stack['elements'][l])
	}
	else if (operation = 'mul') {
		stack['result'] = parseInt(stack['elements'][l-2]) * parseInt(stack['elements'][l])
	}
	else if (operation = 'division'){
		stack['result'] = parseInt(stack['elements'][l-2]) / parseInt(stack['elements'][l])
	}
	else {
		// Ситуация, когда ввод нажали сразу после начала работы приложения
	}
	stack['elements'].pop();
	stack['elements'].pop();
	stack['elements'].pop();
	stack['elements'].push(stack['result']);
};
function forNumber(element){
	/*
	Ставит число в стек на обработку
	*/
	if ((stack['elements'][stack['elements'].length] == 'add') || (stack['elements'][stack['elements'].length] == 'mul') ||
	(stack['elements'][stack['elements'].length] == 'sub') || (stack['elements'][stack['elements'].length] == 'division'))
	{
		stack['elements'].push(element);	
	}
	else {
		stack['elements'][stack['elements'].length] += element;
	};
	console.log(stack['elements']);
	numberFlag = true;
	};

function forOperation(operation){
	/*
	Добавляет оператор в очередь на обработку
	*/
	if ((stack['elements'][stack['elements'].length] == 'add') || (stack['elements'][stack['elements'].length] == 'mul') ||
	(stack['elements'][stack['elements'].length] == 'sub') || (stack['elements'][stack['elements'].length] == 'division'))
	{
		stack['elements'][stack['elements'].length] = operation;
	}
	else {
		getOperation();
		stack['elements'].push(operation);
	}
	numberFlag = false;
	};
function forResult(){
	/*
	Обрабатывает нажатие на 'Посчитать'
	*/
	getOperation();
};

$('.number').each(function(){
	var current = this;
	this.onclick = function(event){
		var value = event.target.id;
		if (numberFlag == true){
			$('#result').text(document.getElementById('result').innerHTML+value);	
		}
		else{
			document.getElementById('result').innerHTML='';
			$('#result').text(value);
		}
		forNumber(value) // Почему значение undefined+value?
		
	};
	})
$('.operation').each(function(){
	var current = this;
	this.onclick = function(event){
		var value = event.target.id;
		forOperation(value)  // Почему значение undefined+value?
		$('#result').text(stack.result);
		
	};
	})
$('#enter').each(function(){
	var current = this;
	this.onclick = function(event){
		forResult() // Почему значение undefined+value?
		$('#result').text(stack['result']);
	};
	})

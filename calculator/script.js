// JavaScript Document
$(document).ready(function(e) {
	var arr = [];	
	var fl = 0;
	var y = '';
	var el = '0';	
	add(el);
	function enter (number,str){
		if (itNum(number)){
			if ((str == '0') && itNum(number)){
				  $(".result").text(number)				  			  
				}
				else{				
					if (parseFloat(y) != 0 || number != '0'){							
					$(".result").append(number);
					}					
				}
				add(number);
		}
		else {					
				if (itNum(el)){
				$(".result").append(number);
				add(number);
			}
				
				
		}
		el=number;
	}

	function help (str) {
		var zeroY = parseInt(y+str);
		if (zeroY != 0){		
			return str;		
		}
		else
		{
			return '0';
		}
	}
	function itNum (str) {
		var codeSymbol = str.charCodeAt(0);		
		if ( ( codeSymbol > 47 ) && ( codeSymbol <= 57) || (codeSymbol == 46)){
			return true; //это число 0-9
		}
		else{
			return false; // это символ + - * /
		}
	}
	function add (element){
		var bool = itNum(element); //проверяем чем является
		var count = arr.length;
		if (bool || element == '.'){			
			y+=element;								
		}
		else { 
			if(arr.length == 0){
			  arr.push(y);
			  arr.push(element);
			  y = '';			
			}			
			else if(arr.length == 1){
				arr.push(element);			
			}
			else if(arr.length == 2){
				arr.push(y);
				y='';
				var right = arr.pop(); 
				var op = arr.pop();
				var left = arr.pop();
				$('p.history').append(left);
				left = doIt (left,op,right);
				$('p.history').append(op+right+'='+left+'<br>');
				$(".result").text(left+'');
				$(".result").append(element);								
				arr.push(left);
				arr.push(element);
			}
			
		}
		
	}
	function doIt (leftArg,oper,rightArg){
		var codeOper = oper.charCodeAt(0);
		var left = parseFloat(leftArg,10);
		var right = parseFloat(rightArg,10);
		switch (codeOper){
			case 43 :{ //сложение
				return left+right; 
				break;
			}
			case 45 :{ //вычитание
				return left-right; 
				break;
			}
			case 42 :{ //умножение
				return left*right; 
				break;
			}
			default :{ //деление
				if (right !=0){
				return left/right; 
				}
				else
				{
					alert ('error not devision on 0, please try again');
					return left;
				}				
			}

		}
	}
	function ans (){
		var count = arr.length;
		//if (count == 0){
			//$(".result").text($(".result").text());
		//}
		if (count == 2){
			if (y){
			  var op = arr.pop()
			  var left = arr.pop()
			  var res = doIt(left,op,y)
			  var yhelp = parseFloat(y);
			  left = parseFloat(left); 
			  if ((op == '/') && (y == '0')){
				  $('p.history').append(left+op+yhelp+'=error <br>'); // печатаем историю
				  $(".result").text(left);
			  }
			  else
			  {
				$('p.history').append(left+op+yhelp+'='+res+'<br>'); // печатаем историю
				y=res+'';
				$(".result").text(res);
			  }						
			}
			else {
				alert("no second argument");
			}
		}		
		}
		function butOn (codeKey,bool){
			switch (codeKey){
			case 111: {
				bool ? $(".ndiv").addClass('onButton') : $(".ndiv").removeClass('onButton') ;			
				break;
			}
			case 106: {
				bool ? $(".nmul").addClass('onButton') : $(".nmul").removeClass('onButton');
				break;
			}
			case 109: {
				bool ? $(".nminus").addClass('onButton') : $(".nminus").removeClass('onButton');
				break;
			}
			case 107: {
				bool ? $(".nplus").addClass('onButton') : $(".nplus").removeClass('onButton');
				break;
			}
			case 46: {				
				bool ? $(".back").addClass('onButton') : $(".back").removeClass('onButton');
				break;
			}
			case 13: {
				bool ? $(".nEqual").addClass('onButton') : $(".nEqual").removeClass('onButton');			
				break;
			}
			default : {
				var t  
				if (codeKey<=57 && codeKey>=48){
				 t = codeKey - 48;
				}
				else if (codeKey<=105 && codeKey>=96){
					t = codeKey - 96;
				}
				bool ? $(".n"+t).addClass('onButton') : $(".n"+t).removeClass('onButton');			
				break;
			}
		}
			
		}		
	$(".button > *, .back, .nEqual").on('mouseover',function (e) {	 //при наведении на кнопку
		$(this).addClass('onButton');
	});
	$(".button > *, .back, .nEqual").on('mouseout',function (e) { //когда убираем с кнопки
		$(this).removeClass('onButton');
	});
	$(document).on('keyup',function (e) { //когда убираем с кнопки
		var codeKey = e.which;		
		//alert(codeKey);
		butOn(codeKey,false);		
	});
	$(document).on('keydown',function (e) { //когда нажимаем кнопку
		var codeKey = e.which;

		butOn(codeKey,true);
	});
	$(".button > *").click(function () {
		var str = $(".result").text();
		var number = $(this).html();
		enter(number,str);		
		
	});
	$(".back").click(function (){ // кнопка очистить
		$(".result").text('0');
		arr.length=0;
		y='0';				
	});
	$(".nEqual").click(function (){  // кнопка равно		
	ans();
	});
	
	$(document).keypress(function(e){
		var codeKey = e.which;
		var number = '';
		var str = $(".result").text();		
		switch (codeKey){
			case 47: {
				number = '/';				
				break;
			}
			case 42: {
				number = '*';
				break;
			}
			case 45: {
				number = '-';
				break;
			}
			case 43: {
				number = '+';
				break;
			}
			case 0: {				
				$(".result").text('0');
				arr.length=0;
				y='0';
				break;
			}
			case 13: {
				ans();			
				break;
			}
			case 46 :{
				number='.';
				break;
			}
		}
		//alert(codeKey);
		if ( codeKey>= 48 && codeKey<=57){
			number = (codeKey - 48)+ '';			
		}
		if (number){
		enter(number,str);	
		}
});

});
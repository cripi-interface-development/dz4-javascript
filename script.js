var f; //флаг появления оператора
var x; //вводимый символ
var a1; //первый операнд
var a2; //второй операнд
var op; //оператор
var eq; //флаг нажатого "=" 
var symbl1; //количество знаков в первом операнде
var symbl2; //количество знаков во втором операнде
var res=0;
var mes='Привет! Я калькулятор, написанный Олей Левитской =)';
$(document).ready(function() {
  $('div').click(function() {
  
  x = $(this).attr('id'); //присваиваем каждой кнопочке свой идентификатор
  if (x=="i0") x=0;
  if (x=="i1") x=1;
  if (x=="i2") x=2;
  if (x=="i3") x=3;
  if (x=="i4") x=4;
  if (x=="i5") x=5;
  if (x=="i6") x=6;
  if (x=="i7") x=7;
  if (x=="i8") x=8;
  if (x=="i9") x=9;
  if (x=="sum") x=10;
  if (x=="sub") x=11;
  if (x=="mul") x=12;
  if (x=="dev") x=13;
  if (x=="del") x=14;
  if (x=="calc") x=15;
 
 
  if (!isFinite(f)){ //проверяем, что ещё не встретили оператор, значит всё это первое число
  
  if(!isFinite(a1)) {
  if (x==14){document.getElementById("expression").innerHTML=""; document.getElementById("result").innerHTML=""; document.getElementById("message").innerHTML=mes;}
  if (x<10){a1=x; symbl1=1; eq=0; document.getElementById("expression").innerHTML=a1; document.getElementById("result").innerHTML=""; }
  }
  
  else {
	
	if (x<10 && symbl1<8) {a1=a1*10+x; symbl1++; eq=0; document.getElementById("expression").innerHTML=a1;}
	else{
	if (x==10) {f=1; op=x; eq=0; document.getElementById("expression").innerHTML+="+";}
	if (x==11) {f=1; op=x; eq=0; document.getElementById("expression").innerHTML+="-";}
	if (x==12) {f=1; op=x; eq=0; document.getElementById("expression").innerHTML+="*";}
	if (x==13) {f=1; op=x; eq=0; document.getElementById("expression").innerHTML+="/";}
	if (x==14) {f=NaN; a1=NaN; eq=0; document.getElementById("expression").innerHTML=""; document.getElementById("message").innerHTML=mes;}
	}
  }
  }
  
  else{ //так как оператор уже был, значит пошло второе число
	if (x>10 && x!=15 && eq!=1) {document.getElementById("message").innerHTML="Sorry! Теперь надо ввести второе число"}
	if(!isFinite(a2) && (x<10)) {a2=x; symbl2=1; eq=1; document.getElementById("expression").innerHTML+=a2; document.getElementById("message").innerHTML="Чтобы узнать ответ, жми ="}
	else {
		if (x<10 && symbl2<8) {a2=a2*10+x; eq=1; symbl2++; document.getElementById("expression").innerHTML+=x;}
		if (x==14) {f=NaN; a1=NaN; a2=NaN; eq=0; document.getElementById("expression").innerHTML=""; document.getElementById("message").innerHTML=mes;}
		}
	}
	

  if(x==15 && eq==1){ //дополнительная проверка на то, что "=" нажали после второго операнда
	if (op==10) {f=NaN; res=a1+a2; a1=NaN; a2=NaN; eq=0;}
	if (op==11) {f=NaN; res=a1-a2; a1=NaN; a2=NaN; eq=0;}
	if (op==12) {f=NaN; res=a1*a2; a1=NaN; a2=NaN; eq=0;}
	if (op==13) {f=NaN; res=a1/a2; a1=NaN; a2=NaN; eq=0;}
	document.getElementById("result").innerHTML='='+res;
	document.getElementById("message").innerHTML="правда классно? =)"	
	} 
  });
});

var f;
var x;
var a1;
var a2;
var op;
var eq;
var res=0;
$(document).ready(function() {
  $('div').click(function() {
  
  x = $(this).attr('id');
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
 
 
  if (!isFinite(f)){
  
  if(!isFinite(a1)) {
  if (x<10){a1=x; eq=0; document.getElementById("result").innerHTML=a1;}
  }
  else {
	if (x<10) {a1=a1*10+x; eq=0; document.getElementById("result").innerHTML=a1;}
	else{
	if (x==10) {f=1; op=x; eq=0; document.getElementById("result").innerHTML+="+";}
	if (x==11) {f=1; op=x; eq=0; document.getElementById("result").innerHTML+="-";}
	if (x==12) {f=1; op=x; eq=0; document.getElementById("result").innerHTML+="*";}
	if (x==13) {f=1; op=x; eq=0; document.getElementById("result").innerHTML+="/";}
	if (x==14) {f=NaN; a1=NaN; eq=0; document.getElementById("result").innerHTML="";}}
	
  }
  }
  
  else{
	if(!isFinite(a2) && (x<10)) {a2=x; eq=1; document.getElementById("result").innerHTML+=a2;}
	else {
		if (x<10) {a2=a2*10+x; eq=1; document.getElementById("result").innerHTML+=a2;}
		if (x==14) {f=NaN; a1=NaN; a2=NaN; eq=0; document.getElementById("result").innerHTML="";}
		}
	}
	

  if(x==15 && eq==1){ 
	if (op==10) {f=NaN; res=a1+a2; a1=NaN; a2=NaN; eq=0;}
	if (op==11) {f=NaN; res=a1-a2; a1=NaN; a2=NaN; eq=0;}
	if (op==12) {f=NaN; res=a1*a2; a1=NaN; a2=NaN; eq=0;}
	if (op==13) {f=NaN; res=a1/a2; a1=NaN; a2=NaN; eq=0;}
	
  document.getElementById("result").innerHTML+='='+res;
	} 
  });
});

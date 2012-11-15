function addChar(character) {
	document.clacForm.calcDisp.value = document.clacForm.calcDisp.value + character;
}

function calc() {
	document.clacForm.calcDisp.value = eval(document.clacForm.calcDisp.value);
}
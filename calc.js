$(document).ready(function() {
  var expr = '';
  $('.but').click(function() {
	if (expr === 'Division by zero')
		expr = '';
	var $cur = $(this).html();
	if ($cur === 'c')
		expr = '0'
	else if ($cur in ['0','1','2','3','4','5','6','7','8','9'])
	  if (expr == '0')
		expr = $cur
	  else
		expr += $cur
	else if ($cur === '=')
	  expr = eval(expr)
	else
	  expr = expr + ' ' + $cur + ' ';
	if (Math.abs(expr) === Infinity)
		expr = 'Division by zero';
	$('.display').html(expr);
	});
});
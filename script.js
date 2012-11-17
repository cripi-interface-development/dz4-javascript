$(document).ready(function()
{
     var Operands = new Array();
     Operands[0] = "0";
     Operands[1] = "0";
     var i = 0;
     var Operation = "";
     
     $('.btnNum').click(function(event)
     {
          Operands[i] += $(this).html();          
          $('.display').text(parseFloat(Operands[ i ]));
    });
        
    $('.btnOp').click(function(event)
    {
         if( i > 0 )
         {
              var temp = Operands[0];
              
              switch(Operation)
              {
                   case '+':
                        Operands[0] = parseFloat(temp) + parseFloat(Operands[1]);
                        break;
                   case '-':
                        Operands[0] = parseFloat(temp) - parseFloat(Operands[1]);
                        break;
                   case '/':
                        if(parseFloat(Operands[1]) === 0)
                        {
                             alert("Error!");
                             Operands[0] = 0;
                        }
                        else
                             Operands[0] = parseFloat(temp) / parseFloat(Operands[1]);
                        break;
                   case '*':
                        Operands[0] = parseFloat(temp) * parseFloat(Operands[1]);
                        break;
                   default:
                        Operands[0] = temp;
                        break;
              }
              
              Operands[1] = "0";
              i = 1;
              Operation = $(this).html();
              
              $('.display').text(Operands[0]);              
         }
         
         else
         {
              Operation = $(this).html();
              i++;
         }
         
         if( Operation === '=' )
         {
              $('.display').text(Operands[0]);
         }
    });
    
    $('.btnClear').click(function(event)
    {
         $('.display').text(null);
         Operands[0] = "0";
         Operands[1] = "0";
         Operation = "";
         i = 0;
    });
})
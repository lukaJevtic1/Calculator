let Total = 0; // konacan broj
let buffer = "0"; // broj koji se puni
let previousOperator; // prosli operator


const screen = document.querySelector('.screen');

function buttonClick(value)
{

    if(isNaN(value)) // ako je nan
    {
        handleSymbol(value); // hendl

    }
    else
    {

        handleNumber(value); // hendluj n
    } 
    screen.innerText = buffer;
}

function handleSymbol(value)
{

    switch(value)
    {
        case 'C':
            buffer = '0'; 
            Total = 0;
             break;
        case '=':
            if(previousOperator === null){
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = Total;
            Total = 0;
            break;

         case '←':
            if(buffer.length === 1)
            {
                buffer = '0';

            }  
            else
            {

                buffer = buffer.toString();
                buffer = buffer.substring(0, buffer.length - 1);
            } 
            break;
        
        case '+':
        case '−':    
        case '×':
        case '÷':  
            handleMath(value);
            break;
    }

}

function handleMath(symbol)
{

    if(buffer ===  '0')
    {
        return;
    }
    const intBuffer = parseInt(buffer);

    if(Total === 0)
    {
        Total = intBuffer;

    }
    else
    {

        flushOperation(intBuffer);
    }
    previousOperator = symbol;
    buffer =  '0';
    
}
function flushOperation(intBuffer)
{

    if(previousOperator === '+')
        Total += intBuffer; 
    else if(previousOperator === '−')
        Total -= intBuffer;
    else if(previousOperator === '×')
        Total *= intBuffer;
    else
        Total /= intBuffer;
} 
function handleNumber(number)
{
    if(buffer ===  "0")
      buffer = number;
    else
    {
        buffer += number;

    }
}
function init()
{

document.querySelector('.cals-buttons').addEventListener('click',function(event){

buttonClick(event.target.innerText);
})

}
init();


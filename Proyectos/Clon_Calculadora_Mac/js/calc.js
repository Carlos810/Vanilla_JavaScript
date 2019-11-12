
var operator = null;

var inputValueMemo = 0;

function getContentClick(event) {
    const value = event.target.innerHTML;
    filterAction(value);    
}

//recibe y manda el numero o signo elegido por el usuario
const filterAction = value => {
    value === '0' ? addNumberInput(0) : null ;
    value === '1' ? addNumberInput(1) : null ;
    value === '2' ? addNumberInput(2) : null ;
    value === '3' ? addNumberInput(3) : null ;
    value === '4' ? addNumberInput(4) : null ;
    value === '5' ? addNumberInput(5) : null ;
    value === '6' ? addNumberInput(6) : null ;
    value === '7' ? addNumberInput(7) : null ;
    value === '8' ? addNumberInput(8) : null ;
    value === '9' ? addNumberInput(9) : null ;
    value === '.' ? addNumberInput('.') : null ;
        
    value === '+'   ?   setOperator('+') : null ;
    value === '-'   ?   setOperator('-') : null ;
    value === 'X'   ?   setOperator('X') : null ;
    value === '/'   ?   setOperator('/') : null ; 
    value === '%'   ?   setOperator('%') : null ;
    value === '+/-' ?   setOperator('+/-') : null ;
    
    value === 'AC' ? resetCalculator() : null;

    value === '=' ?   calculation() : null ;   

}

//ingresar el numero(s) en la calculator_screen
function addNumberInput(value) {
    const inputScreen = document.getElementsByClassName('calculator_screen')[0];
    const inputValue = inputScreen.value;


    if(inputValue === '0' && inputValue.length === 1 && value !== '.') {
        inputScreen.value = value;
        return;
    }

    if(inputScreen.value === '' && value === '.') {
        inputScreen.value = 0 + value;
        return;
    }

    inputScreen.value = inputValue + value;
}

//setea los valores de los signos en la calculadora
function setOperator(operator) {
    const inputScreenValue = document.getElementsByClassName('calculator_screen')[0].value
    this.operator = operator;

    if(inputScreenValue !=  0) {
        calculation();
    }
}

// calculation() - contiene la logica de las operaciones aritmeticas. Esta funcion hace que la calculadora devuelva el resultado de la operacion, despues de haber hecho click en el signo elegido incluso sin presionar el boton con el valor de "=".
function calculation() {
    const inputScreen = document.getElementsByClassName('calculator_screen')[0];
    let valueOne = parseAnyNumberToFloat(this.inputValueMemo);
    let valueTwo = parseAnyNumberToFloat(inputScreen.value);
    let total = 0;

    if( this.operator === '+' && inputScreen.value !== '' ) {
        total = valueOne + valueTwo;
    }

    if( this.operator === '-' && inputScreen.value !== '' ) {
        if(valueOne !== 0) {
            total = valueOne - valueTwo;
        }else{
            total = valueTwo;
        }
    }

    if( this.operator === '/' && inputScreen.value !== '' ) {
        if(valueOne !== 0) {
            total = valueOne / valueTwo;
        }else{
            total = valueTwo;
        }
    }

    if( this.operator === 'X' && inputScreen.value !== '' ) {
        if(valueOne !== 0) {
            total = valueOne * valueTwo;
        }else{
            total = valueTwo;
        }
    }

    if(this.operator === '%' && inputScreen.value !== '') {
        total = valueTwo / 100;
    }

    if(this.operator === '+/-' && inputScreen.value !== '') {
        if(valueTwo > 0) {
            total = -valueTwo;
        }
    }

    this.inputValueMemo = total;
    inputScreen.value = '';
    inputScreen.placeholder = total;
}


const resetCalculator = () => {
    const inputScreen = document.getElementsByClassName('calculator_screen')[0];
    inputScreen.value = 0
    this.inputValueMemo = 0;
    this.operator = null;
}


function parseAnyNumberToFloat(value) {
    if(typeof value !== 'number') {
        let resultTransform = value;
        return parseFloat(resultTransform);
    }
    return value;
}
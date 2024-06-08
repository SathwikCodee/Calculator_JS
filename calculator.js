const screenDisplay = document.getElementById("screen");
const allButtons = document.querySelectorAll('.buttons');



let currentInput ="";
let operandToUse="";
let firstNumber=null;

allButtons.forEach(eachButton => {
    eachButton.addEventListener('click', () => {

        const valueOfButton = eachButton.innerText;
        updateTheScreen(valueOfButton);

        if (!isNaN(valueOfButton) || valueOfButton==='.'){
            currentInput += valueOfButton ;
        }

        else if(valueOfButton==='AC'){
            clearTheScreen(); 
        }

        else if (valueOfButton === 'DE'){
            currentInput = currentInput .slice(0,-1);
            screenDisplay.value=currentInput;
        }
        else if (valueOfButton === '=') {
            
            calculateResult(); 
        }
        else{
            if (operandToUse===''){
                firstNumber = parseFloat(currentInput);
                operandToUse= valueOfButton;
                currentInput='';

            }
            else{
                operandToUse= valueOfButton;
            }
        }

    });
});

function calculateResult(){
    const secondNumber = parseFloat(currentInput);
    let result =0;

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        displayError();
        return;
    }


    switch (operandToUse){

        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            if (secondNumber===0){
                result ='ERROR';
                
            }else{
                result = firstNumber / secondNumber;
               
            }
            break;
        default:
            break;


    }
    screenDisplay.value=result;

    currentInput=result.toString();
    operandToUse = "";
    firstNumber=result;
    

}

function clearTheScreen() {
    currentInput = '';
    operandToUse = '';
    firstNumber = null;
    screenDisplay.value = '';
}

function updateTheScreen(valueOfButton){
    screenDisplay.value += String(valueOfButton);
}


function displayError() {
    screenDisplay.value = "Empty!!";
    setTimeout(() => ( screenDisplay.value  = ""), 1000);
    currentInput = '';
    operandToUse = '';
    firstNumber = null;
}


const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");


themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
 
};
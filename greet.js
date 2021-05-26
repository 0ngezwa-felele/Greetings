const storageInputElement = document.querySelector('.storage');
const textElement = document.querySelector('.storage');
const greetButtonElement = document.querySelector('.butt1');
const resetButtonElement = document.querySelector('.butt2');
const radioBtnElement = document.querySelector('.language');
const textFieldElement = document.querySelector('.fieldSpace');
const counterElement = document.querySelector('counter')


const hello = Greetings();

var radioBtn2 = "";
let counter = 0;

function checked(){
    
var radioBtn = document.querySelector("input[name='language']:checked");

var InputText = textElement.value

if(radioBtn){
    radioBtn2 = radioBtn.value
}
 

hello.greetPlease(radioBtn2, InputText)
textFieldElement.innerHTML = hello.getPlease(); 
}



greetButtonElement.addEventListener('click',checked);
counterElement.addEventListener('click' ,function(){
    counter++;
    counter.innerHTML = counter;
})

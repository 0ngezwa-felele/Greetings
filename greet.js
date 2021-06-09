const storageInputElement = document.querySelector('.storage');
const textElement = document.querySelector('.storage');
const greetButtonElement = document.querySelector('.butt1');
const resetButtonElement = document.querySelector('.butt2');
const radioBtnElement = document.querySelector('.language');
const textFieldElement = document.querySelector('.fieldSpace');
const storage = document.getElementsByClassName(".storage");
const language = document.getElementsByClassName(".language");
const butt1Elenment = document.getElementsByClassName(".butt1");
const fieldSpaceElement = document.getElementsByClassName(".fieldSpace");
const counterElement = document.querySelector('.count');
const errorElement = document.querySelector('.errorMessage')

var existingNames;
let counter = 0;

if (localStorage['name']) {
    existingNames = JSON.parse(localStorage['name']);
    counter = Number(localStorage['name']);
}



const hello = Greetings(existingNames)
var character = /^[A-Za-z]+$/;
counterElement.innerHTML = hello.counter1()

var radioBtn2 = " ";


function checked() {
    setTimeout(function () { errorElement.innerHTML = hello.errorTimeOut() }, 4000);

    var radioBtn = document.querySelector("input[name='language']:checked");


    var InputText = textElement.value

    if (radioBtn !== null && InputText !== "" && character.test(textElement.value)) {


        radioBtn2 = radioBtn.value
        hello.setNames(InputText);
        hello.greetPlease(radioBtn2, InputText)
        textFieldElement.innerHTML = hello.getPlease();
        errorElement.innerHTML = hello.existing();
        counterElement.innerHTML = hello.counter1();
        localStorage.setItem('name', JSON.stringify(hello.getText()));

        // clearing the textbox when the greet button is clicked
        textElement.value = "";
        document.querySelector(".storage").value = "";

        // clearing redio buttons when the greet button is clicked
        // radioBtnElement.value = "";

        document.querySelector(".language").checked = false;

    }
    // error messages
    else if (InputText === "" && radioBtn === null) {
        errorElement.innerHTML = hello.errorBoth();

    }
     else if (InputText === "" && radioBtn !== null) {
        errorElement.innerHTML = hello.errorName();
    }
    else  if (radioBtn === null) {
        errorElement.innerHTML = hello.errorLang();
    }

     else if (!character.test(textElement.value)) {
        errorElement.innerHTML = hello.SpecialChar();
    }

   
      
    

}



// reset button
function clear() {
    localStorage.clear();
    location.reload();
}


greetButtonElement.addEventListener('click', checked);

resetButtonElement.addEventListener('click', clear);

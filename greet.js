const storageInputElement = document.querySelector('.storage');
const textElement = document.querySelector('.storage');
const greetButtonElement = document.querySelector('.butt1');
const resetButtonElement = document.querySelector('.butt2');
const radioBtnElement = document.querySelector('.language');
const textFieldElement = document.querySelector('.fieldSpace');
// const counterElement = document.querySelector('counter');
const storage = document.getElementsByClassName(".storage");
const language = document.getElementsByClassName(".language");
const butt1Elenment = document.getElementsByClassName(".butt1");
const fieldSpaceElement = document.getElementsByClassName(".fieldSpace");
const counterElement = document.querySelector('.count');
const errorElement = document.querySelector('.errorMessage')

var existingNames;

if (localStorage['name']) {
    existingNames = JSON.parse(localStorage['name'])
}

const hello = Greetings(existingNames)
counterElement.innerHTML = hello.counter1()

var radioBtn2 = "";
let counter = 0;

function checked() {

    var radioBtn = document.querySelector("input[name='language']:checked");

    var InputText = textElement.value

    if (radioBtn !== null && InputText !== "") {
        radioBtn2 = radioBtn.value
        hello.setNames(InputText);
        hello.greetPlease(radioBtn2, InputText)
        textFieldElement.innerHTML = hello.getPlease();
        counterElement.innerHTML = hello.counter1()
        window.localStorage.setItem('name', JSON.stringify(hello.getText()));

        textElement.value = "";
        document.querySelector(".storage").value = "";

    }
    // alert(InputText === "")
    if (InputText === "" && radioBtn === null) {
        errorElement.innerHTML = hello.errorBoth();

    }
    else if (InputText === "" && radioBtn !== null) {
        errorElement.innerHTML = hello.errorName();
    }
    else if (radioBtn === null) {
        errorElement.innerHTML = hello.errorLang();
    }




}

setTimeout(function () {
}, 3000);

function clear() {
    localStorage.clear();
    location.reload();
}


greetButtonElement.addEventListener('click', checked);

resetButtonElement.addEventListener('click', clear);

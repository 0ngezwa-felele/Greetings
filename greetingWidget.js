function Greetings(exist) {
    var nameList = exist || []
    var give = "";
    var greetMessage;

    function setNames(name) {
        if (name!= '' && /^[a-zA-Z]+$/.test(name)){
            var char = name[0].toUpperCase() + name.slice(1).toLowerCase();
        if (!nameList.includes(char)) {
            nameList.push(char)
        }else{
            give = "Name greeted already"
        }
    }
}

    function greetPlease(lang, myName) {
        if (lang === "Isixhosa") {
            greetMessage = "Molo, " + myName[0].toUpperCase() + myName.slice(1).toLowerCase();

        }
        else if (lang === "English") {
            greetMessage = "Hello, " + myName[0].toUpperCase() + myName.slice(1).toLowerCase();
        }
        else if (lang === "Sepedi") {
            greetMessage = "Thobela, " + myName[0].toUpperCase() + myName.slice(1).toLowerCase();
        }
        return greetMessage;

    }
    function getPlease() {
        return greetMessage
    }
    function counter1() {
        return nameList.length
    }
    function getText() {
        return nameList;
    }

    function all(name, word){
        if(name !="" && word!="" &&  /^[a-zA-Z]+$/.test(name)){
            return word + name[0].toUpperCase() + name.slice(1).toLowerCase();
        }
    }
    function errorName() {
        return "Please type in a Name!"
    }
    function errorLang() {
        return "Please select a language!"
    }
    function errorBoth() {
        return "Please type in a name and select a language!"
    }
    function SpecialChar() {
        return "Enter a valid name!"
    }
    function existing(){
        return give;
    }


    function errorTimeOut() {
        return " "
    }
   
    return {
        Greetings,
        setNames,
        greetPlease,
        getPlease,
        counter1,
        getText,
        setTimeout,
        errorName,
        errorLang,
        errorBoth,
        errorTimeOut,
        SpecialChar,
        existing,
        all




    }

}

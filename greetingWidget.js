function Greetings() {
    var text = [];
    var names = 0;
    var output = "";

    function setNames(name) {
        if (!text.includes(name)) {
            text.push(name)
            names ++;
        }

    }
    
    function greetPlease(lang, myName){
        if (lang === "Isixhosa"){
            output = "Molo, "+ myName[0].toUpperCase() + myName.slice(1).toLowerCase(); 
            
        }
        else if(lang === "English"){
            output = "Hello, "+ myName[0].toUpperCase() + myName.slice(1).toLowerCase();
        }
        else if(lang === "SePedi"){
            output = "Thobela, "+ myName[0].toUpperCase() + myName.slice(1).toLowerCase();
        }
    }
    function getPlease(){
        return output;
    }
    function counter(){
        return 
    }

    return {
        Greetings,
        setNames,
        greetPlease,
        getPlease,
        counter

    }
}

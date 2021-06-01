function Greetings(exist) {
    var nameList = exist || []
    var greetMessage;

    function setNames(name) {
        if (!nameList.includes(name)) {
            nameList.push(name)
            // names ++;
            
        }

    }
   
   
    function greetPlease(lang, myName){
        if (lang === "Isixhosa"){
            greetMessage = "Molo, "+ myName[0].toUpperCase() + myName.slice(1).toLowerCase(); 
            
        }
        else if(lang === "English"){
            greetMessage = "Hello, "+ myName[0].toUpperCase() + myName.slice(1).toLowerCase();
        }
        else if(lang === "SePedi"){
            greetMessage = "Thobela, "+ myName[0].toUpperCase() + myName.slice(1).toLowerCase();
        }
    }
    function getPlease(){
        return greetMessage
    }
    function counter1(){
        return nameList.length
    }
    function getText(){
        return nameList;
    }
    function errorName(){
        return "Please type in a Name"
    }
    function errorLang(){
        return "Please select a language"
    }
    function errorBoth(){
        return "Please type in a name and select a language"
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
        errorBoth

        

    }
    
}

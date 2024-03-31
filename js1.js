function oddEven(){


    event.preventDefault();
    const input = document.getElementById('oe');
    const x = parseInt(input.value);
    if(isNaN(x)){
        alert("Invalid input")
        return}

    if(x % 2 === 0){document.getElementById("result").innerHTML = "It's indeed an Even Number!"}
    else {document.getElementById("result").innerHTML = "Nope, she's Ooodd!"; return}
    

}

let changeTemp = document.getElementById("changeTemp")
let tempLabelInput = document.getElementById("tempLabelInput")


let isCelsius = true
changeTemp.addEventListener("click", function(){
    event.preventDefault();
    isCelsius = !isCelsius

    if(isCelsius) {
        document.getElementsByClassName("inpute")[0].placeholder="Celsius";
        document.getElementsByClassName("outpute")[0].placeholder="Fahrenheit";
    }else{
        document.getElementsByClassName("outpute")[0].placeholder="Celsius";
        document.getElementsByClassName("inpute")[0].placeholder="Fahrenheit";
    }
    tempLabelInput.value=""
    tempConvert.value=""
})

function convertTemperature(){
   
    let tempInput = parseFloat(tempLabelInput.value)
    let celsiusOne = document.getElementsByClassName("inpute")

    if(isNaN(tempInput)){
        alert("Invalid input")
        return;
    }

    if(isCelsius){
        let convertedTemp = (tempInput * 9) / 5 + 32
        convertedTemp.value = convertedTemp.toFixed(2)
        document.getElementsByClassName("outpute")[0].placeholder = [convertedTemp];
    }else{
        let convertedTemp = ((tempInput-32) * 5) / 9
        convertedTemp.value = convertedTemp.toFixed(2)
        document.getElementsByClassName("outpute")[0].placeholder = [convertedTemp];
    }
    event.preventDefault();

}


/**tempConvert.addEventListener("click", convertTemperature)
tempLabelInput.addEventListener("keypress", function (event){
    if (event.key === "" || event.key === "Enter"){
        event.preventDefault()
        convertTemperature()
    }
}

)*/


function clickByMe(){
    
    let multiInput = document.getElementById("mbi")
    let mb = parseFloat(multiInput.value)
    if(isNaN(mb)){
        alert("Invalid input")
        return}
        
    if (mb % 3 == 0 && mb % 5 == 0){
        resultone.innerHTML = mb + "&nbsp;is divisible by both 3 and 5";
    }else if(mb % 3 == 0){
        resultone.innerHTML = mb + "&nbsp;is divisible by 3";
    }else if(mb % 5 == 0){
        resultone.innerHTML = mb + "&nbsp;is divisible by 5";
    }else{
        resultone.innerHTML = "Number you've entered is not divisible by 3 or 5"
    }return
    multipleBy.value = ""
    event.preventDefault()
}


function generateRandom(){   
    event.preventDefault()

    randomArray = Array.from({ length: 8 }, () => Math.floor(Math.random() * 1000));     document.getElementsByClassName("lar")[0].placeholder=[randomArray];
    return
    

}

function findLarge(){
    event.preventDefault()
   

    randomArray.sort(function(a, b){return b - a});
    document.getElementById("resultwo").innerHTML = randomArray[0] + "  is the greatest number"; return
}

function switchSection(showSection, hideSection){
    hideSection.forEach((section) => {
        section.classList.add("d-none")
    })
    showSection.classList.remove("d-none")
}

oddsec.addEventListener("click", function(event){event.preventDefault()
switchSection(odd, [convert, Multiple, Largest])})

convertsec.addEventListener("click", function(event){event.preventDefault()
switchSection(convert, [odd, Multiple, Largest])})

multiplesec.addEventListener("click", function(event){event.preventDefault()
switchSection(Multiple, [convert, odd, Largest])})

largesec.addEventListener("click", function(event){event.preventDefault()
switchSection(Largest, [convert, Multiple, odd])})
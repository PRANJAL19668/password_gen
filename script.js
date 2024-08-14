let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let symbols = document.getElementById("symbols");
let numbers = document.getElementById("numbers");
let gen_BTN = document.getElementById("gen_BTN");
let copyIcon= document.getElementById("copyIcon");


//Showing input slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent = inputSlider.value;
});
gen_BTN.addEventListener('click', ()=>{
    passBox.value = generatePassword();
});
//Generating characters,numbers & symbols.
let lowerChars = 'abcdefghijklmnopqrstuvwxyz'
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = '0123456789';
let allSymbols = '`!@#$%^&*';

//function to generate password
function generatePassword(){
    let genPassword = "";
    let allChars = "";

    allChars +=  lowercase.checked ? lowerChars : "";
    allChars +=  uppercase.checked ? upperChars : "";
    allChars +=  allNumbers.checked ? allNumbers : "";
    allChars +=  allSymbols.checked ? allSymbols : "";

    if(allChars == "" || allChars.length == 0){
        return genPassword;
    }
    // LOOP USED FOR GENERATING STRING OVER HERE.
    let i=1;
    while(i<=inputSlider.value){
        genPassword += allChars.charAt(Math.floor(Math.random()*allChars.length));
        i++;
    }
    return genPassword;
}
copyIcon.addEventListener('click', ()=>{
    if(passBox.value != "" || passBox.value.length>=1){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";
         copyIcon.title= "Password Copied";
        setTimeout(()=>{
            copyIcon.innerHTML = "content_copy";
            copyIcon.title= "";
        },4000);
    }
});


let servings = 1;
button = document.querySelector("button");
servingsInput = document.querySelector(".servings");

document.getElementById("calculatebutton").addEventListener("click", ChangeServings);
function ChangeServings() {
    if (servingsInput.value == 0 || servingsInput.value == "") {
        ResetAmts();
    }
    else {
        ResetAmts();
        myApp.brownsugaramt *= servingsInput.value;
        myApp.butteramt *= servingsInput.value;
        myApp.eggamt *= servingsInput.value;
        myApp.saltamt *= servingsInput.value;
        myApp.bakingsodaamt *= servingsInput.value;
        myApp.vanillaamt *= servingsInput.value;
        myApp.flouramt *= servingsInput.value;
        myApp.chocolatechipsamt *= servingsInput.value;
    }
};

let myApp = Vue.createApp({
    data() {
        return {
            brownsugaramt: 1 * servings,
            butteramt: 1 / 4 * servings, //make fractions fractions and not decimals
            eggamt: 2 * servings,
            saltamt: 1 / 2 * servings,
            bakingsodaamt: 1 / 2 * servings,
            vanillaamt: 1 / 2 * servings,
            flouramt: 4 * servings,
            chocolatechipsamt: 1 * servings,
        }
    }
}).mount('#ingredientsTable')

function ResetAmts() {
    myApp.brownsugaramt = 1;
    myApp.butteramt = 1 / 4;
    myApp.eggamt = 2;
    myApp.saltamt = 1 / 2;
    myApp.bakingsodaamt = 1 / 2;
    myApp.vanillaamt = 1 / 2;
    myApp.flouramt = 4;
    myApp.chocolatechipsamt = 1;
}
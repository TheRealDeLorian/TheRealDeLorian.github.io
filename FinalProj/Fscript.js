let servings = 1;
calculatebutton = document.querySelector("#calculatebutton"); /*REQUIREMENT 9 queryselector 1*/
servingsInput = document.querySelector(".servings"); /*REQUIREMENT 9 queryselector 2*/

document.getElementById("calculatebutton").addEventListener("click", ChangeServings); /*REQUIREMENT 8 eventlistener 1*/
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

//API Calling
let url = "http://www.boredapi.com/api/activity/";
document.querySelector("#newapi").addEventListener('click', fetchdata); /*REQUIREMENT 8 eventlistener 2*/
function fetchdata() { 
    fetch(url) /*REQUIREMENT 10 lines 53-57 interact with an API*/
        .then(response => response.json())
        .then(data => {
            document.querySelector('#insertactivityhere').innerText = data.activity;
            activityVue.activity = data.activity;
        })
}

let activitydesc = fetchdata()
let activityVue = Vue.createApp({ /*EXTRA CREDIT 4 - lines 62-73 use vue*/
    data() {
        return {
            activity: activitydesc,
        }
    },
    methods: {
        fetchdatanew() {
            fetchdata();
        }
    }
}).mount('#insertactivityhere')


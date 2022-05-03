let servings = 1;
calculatebutton = document.querySelector("#calculatebutton");
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

//API Calling
let url = "http://www.boredapi.com/api/activity/";
document.querySelector("#newapi").addEventListener('click', fetchdata());
function fetchdata() {
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
}
        
        // let activitydesc = fetchdata() // the missing string
        // let activityVue = Vue.createApp({
        //     data() {
        //         return {
        //             activity: activitydesc,
        //         }
        //     }
        // }).mount('#insertactivityhere')
        











        
// (function() {
//     var httpRequest;

//     document.querySelector("#newapi").addEventListener('click', makeRequest);

//     function makeRequest() {
//         httpRequest = new XMLHttpRequest();

//         if (!httpRequest) {
//             alert('could not make XMLHTTP instance');
//             return false;
//         }
//         httpRequest.openreadystatechange = alertContents;
//         httpRequest.open('GET', 'http://www.boredapi.com/api/activity/');
//         httpRequest.send();
//     }

//     function alertContents() {
//         if (httpRequest.readyState === XMLHttpRequest.DONE) {
//             if (httpRequest.status === 200) {
//                 alert(httpRequest.responseText);
//             } else {
//                 alert('There was a problem with the request.');
//             }
//         }
//     }
// })();


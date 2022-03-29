document.addEventListener("load", writeList)

let apam = 3;
console.log(apam);

function writeList() {
    apam += 3
}

console.log(apam);


// const numArray = ["0", "1", "2", "3", "4"];
// let destination = document.querySelector("#list");

// let newul = document.createElement("ul");
// newul.innerHTML = `<li>${numArray[3]}</li>`;
// destination.appendChild(child);

// function writeList() { //takes each item in numArray and makes an item in the ul
    
//     for (let i = 0; i < numArray.length; i++) {
       
//     }

// };

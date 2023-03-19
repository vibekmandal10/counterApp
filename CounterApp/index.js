//document.getElementById("count-el").innerText = 5

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let totalEl = document.getElementById("total-el")
let count = 0
let totalcount =0

function increment(){
    count = count +1;
    
   // document.getElementById("count-el").innerText = count
    countEl.innerText = count
}

let previouseentries = "Previous Entries: "
function save(){
    if(count > 0){
        previouseentries = previouseentries + count + " - "
    }

totalcount = totalcount + count
count = 0
countEl.innerText = count
saveEl.textContent = previouseentries
totalEl.textContent = "Total: " + totalcount
 
}

//console.log(count)
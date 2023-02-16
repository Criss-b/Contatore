let containerPara = document.createElement("div");
document.body.append(containerPara);
containerPara.className = "container-para";

let para = document.createElement("p");
containerPara.appendChild(para);
para.className = "para";
para.setAttribute("id", "cambia");
para.textContent = "0";


let containerBottoni = document.createElement("div");
document.body.append(containerBottoni);
containerBottoni.className = "container-bottoni";


let piu = document.createElement("button");
let meno = document.createElement("button");
containerBottoni.prepend(piu);
containerBottoni.append(meno);
piu.setAttribute("id", "piu");
piu.setAttribute("onclick", "incrementa()");
piu.textContent = "+";
meno.setAttribute("id", "meno");
meno.setAttribute("onclick", "decrementa()");
meno.textContent = "-";


let containerReset = document.createElement("div");
document.body.append(containerReset);
containerReset.className = "container-reset";

let azzera = document.createElement("p");
containerReset.appendChild(azzera);
azzera.setAttribute("id", "reset");
azzera.setAttribute("onclick", "confermaReset()");
azzera.textContent = "RESET";




let conteggio = 0;
const cambia = document.getElementById("cambia");
document.addEventListener ("click", incrementa);
function incrementa() {
    conteggio++;
    cambia.innerHTML = conteggio;
}



document.addEventListener('click', decrementa);
function decrementa(){
    conteggio--;
    cambia.innerHTML = conteggio;
    if (conteggio<0) {
        cambia.style.color = "red";

    } else {
        cambia.style.color = "white";
    }

}

function confermaReset() {
    var resp = window.confirm("Confermare reset?");
        if(resp){
         return conteggio = 0;
        }
}

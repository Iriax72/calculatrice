const nombresContainer = document.querySelector("#nombres");
const operateursContainer = document.querySelector("#operateurs");
const cmd1 = document.querySelector("#cmd1");

const b0 = document.querySelector("#zero");

const chiffres = [...nombresContainer.children].concat([b0]);
const operateurs = [...operateursContainer.children];
const cmds = [...cmd1.children];
const btns = chiffres.concat(operateurs, cmds);

const btn_egal = document.querySelector("#egal");
const btn_AC = document.querySelector("AC_btn");

let input = [];
const p_ecran = document.querySelector("#p_ecran");

function string(list){
    let str = "";
    list.forEach(element => {str + element});
    return str;
}

//l'index est l'id du boutton.
const valeurs = {
    "zero": 0,
    "b1": 1,
    "b2": 2,
    "b3": 3,
    "b4": 4,
    "b5": 5,
    "b6": 6,
    "b7": 7,
    "b8": 8,
    "b9": 9,
    "addition": "+",
    "soustraction": "-",
    "multiplication": "X",
    "division": "/",
    "paran1": "(",
    "paran2": ")",
    "virgule": ",",
    "factorielle": "!"
};

// LE CODE:

btns.forEach(button => {
    button.onclick = function(){
        input.push(valeurs[button.id]);
        p_ecran.innerText(string(input));
        };
});

btn_AC.onclick = function(){
    input.pop();
    p_ecran.innerText(string(input));
};
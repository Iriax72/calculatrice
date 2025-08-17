const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const b7 = document.getElementById("b7");
const b8 = document.getElementById("b8");
const b9 = document.getElementById("b9");
const b0 = document.getElementById("zero");
const chiffres = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b0];

const btn_add = document.getElementById("addition");
const btn_sou = document.getElementById("soustraction");
const btn_mul = document.getElementById("multiplication");
const btn_div = document.getElementById("division");
const operateurs = [btn_add, btn_sou, btn_mul, btn_div];

const btn_AC = document.getElementById("AC_btn");
const btn_paran1 = document.getElementById("paran1");
const btn_paran2 = document.getElementById("paran2");
const btn_fac = document.getElementById("factorielle");
const btn_virgule = document.getElementById("virgule");
const cmds = [btn_AC, btn_paran1, btn_paran2, btn_fac, btn_virgule];

const btns = chiffres.concat(operateurs, cmds.filter(cmd => cmd !== btn_AC));

const btn_egal = document.getElementById("egal");

let input = [];
const p_ecran = document.getElementById("p_ecran");

function string(list){
    let str = "";
    list.forEach(element => {str += element});
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
        input.push(valeurs[element.id]);
        p_ecran.innerHTML(string(input));
        };
});

btn_AC.onclick = function(){
    input.pop();
    p_ecran.innerHTML(string(input));
};
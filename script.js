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
const btn_virgule = document.getElementById("virtule");
const cmds = [btn_AC, btn_paran1, btn_paran2, btn_fac, btn_virgule];

const btns = chiffres + operateurs + cmds;

const btn_egal = document.getElementById("egal");
let isEgalPressed = false;

let input = [];


// LE CODE:

while(!isEgalPressed){
    btn_egal.onclick(isEgalPressed = true);
}

alert("egalPressed");
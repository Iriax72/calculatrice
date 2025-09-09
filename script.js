const nombresContainer = document.querySelector("#nombres");
const operateursContainer = document.querySelector("#operateurs");
const cmd1 = document.querySelector("#cmd1");

const b0 = document.querySelector("#zero");

const chiffres = [...nombresContainer.children].concat([b0]);
const operateurs = [...operateursContainer.children];
const cmds = [...cmd1.children];
const btns = chiffres.concat(operateurs, cmds);

const btn_egal = document.querySelector("#egal");
const btn_del = document.querySelector("del_btn");

let screenText = [];
const p_ecran = document.querySelector("#p_ecran");

function string(list){
    let str = "";
    list.forEach(element => {str += element});
    return str;
}

function actualiserEcran(){
    p_ecran.innerText = string(screenText);
}

function calculate(op){;
    operation = op;
    for (let i = 0; i < operation.length; i++){
        if(operation[i].isNumber && (operation[i+1].isNumber || operation[i+1] == ",")){
            operation[i] += operation[i+1];
            operation.splice(i+1, 1);
        }
    }
    // ()
    // !
    // * et /
    // + et -
    console.log(operation);
    return operation;
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
        screenText.push(valeurs[button.id]);
        actualiserEcran();
        };
});

btn_del.onclick = function(){
    screenText.pop();
    actualiserEcran();
};

btn_egal.onclick = function(){
    screenText = calculate(screenText);
    actualiserEcran();
}
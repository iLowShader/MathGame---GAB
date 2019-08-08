/***** ELEMENTS *****/
var sum = document.getElementById("sum");
var sub = document.getElementById("sub");
var mul = document.getElementById("mul");
var div = document.getElementById("div");
var readyMessage = document.getElementById("readyMessage");
var startButton1 = document.getElementById("start1");

/***** STATE VARIABLES *****/
var op_aux = "";
var lives;
var nave_in;

/***** INITIALIZING *****/
img.className = "hide";
start1.className = "hide";

/***** EVENTS *****/
sum.onclick = function () {
    localStorage.setItem("op_aux", "+");
    localStorage.setItem("nave_in", "src/nave1.png")
    readyMessage.className = "";
    readyMessage.innerHTML = "Operação de SOMA selecionada.<br/> Pronto para começar?";
    start1.className = "btn btn-primary";
};

sub.onclick = function () {
    localStorage.setItem("op_aux", "-");
    localStorage.setItem("nave_in", "src/nave2.png")
    readyMessage.className = "";
    readyMessage.innerHTML = "Operação de SUBTRAÇÃO selecionada.<br/> Pronto para começar?";
    start1.className = "btn btn-primary";
};

mul.onclick = function () {
    localStorage.setItem("op_aux", "&times");
    localStorage.setItem("nave_in", "src/nave3.png")
    readyMessage.className = "";
    readyMessage.innerHTML = "Operação de MULTIPLICAÇÃO selecionada.<br/> Pronto para começar?";
    start1.className = "btn btn-primary";
};

div.onclick = function (){
    localStorage.setItem("op_aux", "&divide");
    localStorage.setItem("nave_in", "src/nave4.png")
    readyMessage.className = "";
    readyMessage.innerHTML = "Operação de DIVISÃO selecionada.<br/> Pronto para começar?";
    start1.className = "btn btn-primary";
};

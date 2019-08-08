/***** ELEMENTS *****/
var inputField = document.getElementById("in");
var form = document.querySelector("form");
var p = document.getElementById("p");
var q = document.getElementById("q");
var op = document.getElementById("op");
var response = document.getElementById("response");
var life1 = document.getElementById("life1");
var life2 = document.getElementById("life2");
var life3 = document.getElementById("life3");
var back = document.getElementById("back");
var nave_in1 = document.getElementById("nave_in1");
var nave_in2 = document.getElementById("nave_in2");
var nave_in3 = document.getElementById("nave_in3");
var nave_in4 = document.getElementById("nave_in4");
var pipe1 = document.getElementById("pipe1");
var pipe2 = document.getElementById("pipe2");
var pipe3 = document.getElementById("pipe3");
var pipe4 = document.getElementById("pipe4");
var h = document.getElementById("h");
var result = document.getElementById("result");
var questao = document.getElementById("questao");
var contas = document.getElementById("contas");

/***** STATE VARIABLES *****/
var max = 20;
var num1;
var num2;
var aux;
var answer;
var lifes = 3;
var cont = 0;
var contQuestao = 1;

var op_aux = localStorage.getItem("op_aux");
var nave = localStorage.getItem("nave_in");

nave_in1.src = nave;
nave_in1.className = "hide";
nave_in2.src = nave;
nave_in2.className = "hide";
nave_in3.src = nave;
nave_in3.className = "hide";
nave_in4.src = nave;
nave_in4.className = "center";

back.className = "hide";

window.onload = function () {
    startGame();
};

form.onsubmit = function (e) {
    // need to prevent the default form submission wich reloads the page
    e.preventDefault();
    getAnswer();
};


/***** FUNCTIONS ******/
/*
 * This is called in the onsubmit event
 */
var getAnswer = function () {
    h.className = "hide";
    var correct;
    if (op_aux == "+") {
        correct = num1 + num2;
    } else if (op_aux == "-") {
        correct = num1 - num2;
    } else if (op_aux == "&times") {
        correct = num1 * num2;
    } else if (op_aux == "&divide") {
        correct = num1 / num2;
    }
    console.log(correct);
    // Getting the users attempt

    answer = parseInt(inputField.value);

    if (answer === correct) {
        cont++;
        realocaNave(cont);
        if (cont!=4){
            result.innerHTML = `Resposta <span id="certa">correta</span>! O resultado é ${num1} ${op_aux} ${num2} = ${correct}. A nave avançou em direção ao novo planeta!`;
            response.innerHTML = "";
        }
        else if (cont == 4) {
            result.innerHTML = `Resposta <span id="certa">correta</span>! O resultado para ${num1} ${op_aux} ${num2} = ${correct}.`;
            response.innerHTML = "Você completou a aventura. Parabéns!!!"
            p.className = "hide";
            op.className = "hide";
            q.className = "hide";
            inputField.className = "hide";
            back.className = "btn btn-primary";
        }
    } else {
        lifes--;
        result.innerHTML = `Resposta <span id="wrong">errada</span>! O resultado correto é ${num1} ${op_aux} ${num2} = ${correct}. Você perdeu uma vida.`;
        if (lifes == 2) {
            response.innerHTML = "Cuidado! A nave foi danificada!";
            life1.className = "hide";
        } else if (lifes == 1) {
            response.innerHTML = "Cuidado! Mais um erro e a nave vai explodir!";
            life2.className = "hide";
        } else if (lifes == 0) {
            result.innerHTML = `Resposta <span id="wrong">errada</span>! O resultado correto é ${num1} ${op_aux} ${num2} = ${correct}.`;
            contas.innerHTML = "";
            response.innerHTML = "Nave destruida. Tente novamente!";
            life3.className = "hide";
            back.className = "btn btn-primary";
            inputField.className = "hide";
        }
    }
    operations();
    // clear the input field for the next round
    inputField.value = "";
};

var startGame = function () {
    // questao.innerHTML = `Questão ${contQuestao}`;
    operations();
    inputField.className = ""; // show the input field
    inputField.focus();
};

var operations = function () {
    questao.innerHTML = `Questão ${contQuestao}`;
    contQuestao++;
    if (op_aux == "&divide") {
        num1 = Math.floor((Math.random() * max) + 1);
        num2 = Math.floor((Math.random() * num1) + 1);
        while (num1 % num2 != 0) {
            num2 = Math.floor((Math.random() * num1) + 1);
        }
        op.innerHTML = "&divide";
        p.innerHTML = num1;
        q.innerHTML = num2;
    } else if (op_aux == "+") {
        num1 = Math.floor((Math.random() * max) + 1);
        num2 = Math.floor((Math.random() * max) + 1);
        op.innerHTML = "+";
        p.innerHTML = num1;
        q.innerHTML = num2;
    } else if (op_aux == "-") {
        num1 = Math.floor((Math.random() * max) + 1);
        num2 = Math.floor((Math.random() * num1) + 1);
        op.innerHTML = "-";
        p.innerHTML = num1;
        q.innerHTML = num2;
    } else if (op_aux == "&times") {
        num1 = Math.floor((Math.random() * 10) + 1);
        num2 = Math.floor((Math.random() * 10) + 1);
        op.innerHTML = "&times";
        p.innerHTML = num1;
        q.innerHTML = num2;
    }

};

var realocaNave = function (cont) {
    if (cont == 1) {
        nave_in3.className = "center";
        pipe4.className = "center rotated";
        nave_in4.className = "hide";
    } else if (cont == 2) {
        nave_in2.className = "center";
        pipe3.className = "center rotated";
        nave_in3.className = "hide";
    } else if (cont == 3) {
        nave_in1.className = "center";
        pipe2.className = "center rotated";
        nave_in2.className = "hide";
    } else if (cont == 4) {
        nave_in1.className = "center";
        pipe1.className = "hide";
        pipe2.className = "center rotated";
    }
};
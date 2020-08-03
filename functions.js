/*Variáveis*/
//Soma
var sum_1 = document.getElementById("sum-1");
var sum_2 = document.getElementById("sum-2");
var res_sum = document.getElementById("res-sum");
var sum_form = document.getElementById("sum-form");

//Subtração
var sub_1 = document.getElementById("sub-1");
var sub_2 = document.getElementById("sub-2");
var res_sub = document.getElementById("res-sub");
var sub_form = document.getElementById("sub-form");

//Multiplicação
var mul_1 = document.getElementById("mul-1");
var mul_2 = document.getElementById("mul-2");
var res_mul = document.getElementById("res-mul");
var mul_form = document.getElementById("mul-form");

//Divisão
var div_1 = document.getElementById("div-1");
var div_2 = document.getElementById("div-2");
var res_div = document.getElementById("res-div");
var div_form = document.getElementById("div-form");

/*Funções*/
function soma(a, b){
    return a + b;
}

function subtracao(a, b){
    return a - b;
}

function multiplicacao(a, b){
    return a * b;
}

function divisao(a, b){
    if (b === 0) alert("Divisão por ZERO. Altere o 2º parâmetro!");
    return a / b;
}

/*Event Listeners*/
//Soma
sum_form.addEventListener(
    "submit",
    function(event){
        if (!sum_1.value || !sum_2.value){
            alert("Preencha os campos de 'Soma'.");
        } else {
            var x = parseFloat(sum_1.value);
            var y = parseFloat(sum_2.value);

            var r = soma(x,y);
            res_sum.innerText = "Resultado " + r + ".";
            event.preventDefault();
        }
    }
);

//Subtração
sub_form.addEventListener(
    "submit",
    function(event){
        if (!sub_1.value || !sub_2.value){
            alert("Preencha os campos de 'Subtração'.");
        } else {
            var x = parseFloat(sub_1.value);
            var y = parseFloat(sub_2.value);

            var r = subtracao(x,y);
            res_sub.innerText = "Resultado " + r + ".";
            event.preventDefault();
        }
    }
);

//Multiplicação
mul_form.addEventListener(
    "submit",
    function(event){
        if (!mul_1.value || !mul_2.value){
            alert("Preencha os campos de 'Multiplicação'.");
        } else {
            var x = parseFloat(mul_1.value);
            var y = parseFloat(mul_2.value);

            var r = multiplicacao(x,y);
            res_mul.innerText = "Resultado " + r + ".";
            event.preventDefault();
        }
    }
);

//Divisão
div_form.addEventListener(
    "submit",
    function(event){
        if (!div_1.value || !div_2.value){
            alert("Preencha os campos de 'Divisão'.");
        } else {
            var x = parseFloat(div_1.value);
            var y = parseFloat(div_2.value);

            var r = divisao(x,y);
            res_div.innerText = "Resultado " + r + ".";
            event.preventDefault();
        }
    }
);
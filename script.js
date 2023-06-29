let number = document.querySelector("#result");
let answer = [];
let flag = 0;
function display(val) {
    number.value += val;
    if (val === "+" || val === "-" || val === "*" || val === "/") {
        evaluate();
    }
}
function evaluate() {
    if (flag === 0) {
        flag = 1;
    }
     else {
        number.value = operate();
        flag = 0;
    }
}
function operate() {
    if (number.value.includes("+")) {
        answer = number.value.split("+");
        answer[0] = Number(answer[0]) + Number(answer[1]);
        return answer[0];
    } 
    else if (number.value.includes("-")) {
        answer = number.value.split("-");
        answer[0] = Number(answer[0]) - Number(answer[1]);
        return answer[0];
    } 
    else if (number.value.includes("*")) {
        answer = number.value.split("*");
        answer[0] = Number(answer[0]) * Number(answer[1]);
        return answer[0];
    } 
    else if (number.value.includes("/")) {
        answer = number.value.split("/");
        answer[0] = Number(answer[0]) / Number(answer[1]);
        return answer[0];
    } 
    else if (number.value.includes("%")) {
        answer = number.value.split("%");
        answer[0] = answer[0] / 100;
        return answer[0];
    }
}
function calculate() {
    number.value = operate();
}
function clearAll() {
    number.value = "";
}
function del() {
    number.value = number.value.slice(0, -1);
}

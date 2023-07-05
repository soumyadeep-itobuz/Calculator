const show = document.querySelector("#result");
let arrNumber = [];
let arrSplit = [];
let arr = [];
let num = 0;
let result = 0;
let flag = 0;
let flagDecimal = 0;

function display(val) {
  show.value += val;
  arrNumber.push(show.value);
}

function operator(val) {
  flagDecimal = 1;
  show.value += val;
  if (flag === 0) {
    arrNumber.push(val);
    flag = 1;
  } else {
    if (arrNumber[arrNumber.length - 1].includes("+")) {
      arrSplit = arrNumber[arrNumber.length - 1].split("+");
      result = Number(arrSplit[0]) + Number(arrSplit[1]);
      show.value = result;
    } else if (arrNumber[arrNumber.length - 1].includes("-")) {
      arrSplit = arrNumber[arrNumber.length - 1].split("-");
      result = Number(arrSplit[0]) - Number(arrSplit[1]);
      show.value = result;
    } else if (arrNumber[arrNumber.length - 1].includes("*")) {
      arrSplit = arrNumber[arrNumber.length - 1].split("*");
      result = Number(arrSplit[0]) * Number(arrSplit[1]);
      show.value = result;
    } else if (arrNumber[arrNumber.length - 1].includes("/")) {
      arrSplit = arrNumber[arrNumber.length - 1].split("/");
      result = Number(arrSplit[0]) / Number(arrSplit[1]);
      show.value = result;
    }
    show.value += val;
  }
}

function calculate() {
  operator();
  arr = show.value.split("undefined");
  show.value = arr[0];
}

function decimal() {
  if (!show.value.includes(".") && flagDecimal === 0) {
    show.value += ".";
  } else if (flagDecimal === 1) {
    show.value += ".";
    flagDecimal = -1;
  } else if (flagDecimal === -1) {
    console.log("Wrong");
  }
}

function percent() {
  if (show.value.includes('+') || show.value.includes('-') || show.value.includes('*') || show.value.includes('/')) {
    calculate();
    show.value = show.value / 100;
  }
  else
    show.value = show.value / 100;
}

function clearAll() {
  show.value = "";
  arrNumber = [];
  flag = 0;
  flagDecimal = 0;
}

function del() {
  show.value = show.value.slice(0, -1);
}

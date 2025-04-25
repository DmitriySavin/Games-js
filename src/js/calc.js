// Count

function multiplyBy() {
    num1 = document.getElementById("firstNum").value;
    num2 = document.getElementById("secondNum").value;
    document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() {
  num1 = document.getElementById("firstNum").value;
  num2 = document.getElementById("secondNum").value;
  document.getElementById("result").innerHTML = num1 / num2;
}

function plusBy() {
  num1 = document.getElementById("firstNum").value;
  num2 = document.getElementById("secondNum").value;
  document.getElementById("result").innerHTML = num1 + num2;
}

function minusBy() {
  num1 = document.getElementById("firstNum").value;
  num2 = document.getElementById("secondNum").value;
  document.getElementById("result").innerHTML = num1 - num2;
}
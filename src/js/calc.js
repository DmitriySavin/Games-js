const refs = {
  plusBy: document.querySelector('.first-operator'),
  multiplyBy: document.querySelector('.second-operator'),
  minusBy: document.querySelector('.third-operator'),
  divideBy: document.querySelector('.fourth-operator'),
  firstNum: document.getElementById('#first'),
  secondNum: document.getElementById('#second'),
  equalBy: document.getElementById('#equal'),
};

// let num1 = refs.firstNum;
// console.log(num1);
// const num2 = refs.secondNum.value;
let operation = null;
let num1 = 0;
let num2 = 0;

refs.plusBy.addEventListener('click', () => {
  operation = (a, b) => a + b;
});
refs.multiplyBy.addEventListener('click', () => {
  operation = (a, b) => a * b;
});
refs.minusBy.addEventListener('click', () => {
  operation = (a, b) => a - b;
});
// refs.divideBy.addEventListener('click', onDivideByClick);
refs.equalBy.addEventListener('click', () => {
  const num1 = parseInt(refs.firstNum.value);
  const num2 = parseInt(refs.secondNum.value);
  if (operation) {
    const result = operation(num1, num2);
    document.getElementById('#result').value = result !== null ? result : '';
  }
  else {
    alert('Будь ласка, виберіть операцію');
  }
});

// Count

// console.log(firstNum.value)

// function onMultiplyByClick(a, b) {
//   // console.log(num1, num2)
//   // document.getElementById('#result'.innerHTML = num1 * num2;
//   operation = (a, b) => a * b;
// }

// function onDivideByClick() {
//   // document.getElementById('#result').innerHTML = num1 / num2;
// }

// function onPlusByClick() {
//   // console.log(num1, num2)
//   // document.getElementById('#result').innerHTML = num1 + num2;
//   operation = (a, b) => a + b;
// }

// function onMinusByClick() {
//   // document.getElementById('#result').innerHTML = num1 - num2;
//   operation = (a, b) => a - b;
// }

// function onEqualByClick() {
//   const num1 = parseInt(refs.firstNum.value);
//   const num2 = parseInt(refs.secondNum.value);
//   if (operation) {
//     const result = operation(num1, num2);
//     document.getElementById('#result').value = result !== null ? result : '';
//   } else {
//     alert('Будь ласка, виберіть операцію');
//   }
// }
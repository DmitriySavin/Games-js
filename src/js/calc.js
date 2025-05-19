const refs = {
  firstNum: document.querySelector('#first'),
  secondNum: document.querySelector('#second'),
  plusBy: document.querySelector('.first-operator'),
  multiplyBy: document.querySelector('.second-operator'),
  minusBy: document.querySelector('.third-operator'),
  divideBy: document.querySelector('.fourth-operator'),
  equalBy: document.querySelector('#equal'),
  result: document.querySelector('.calc-result'),
};

let num1 = 0;
let num2 = 0;
let operation = null;

refs.plusBy.addEventListener('click', () => {
  operation = (a, b) => a + b;
});
refs.multiplyBy.addEventListener('click', () => {
  operation = (a, b) => a * b;
});
refs.minusBy.addEventListener('click', () => {
  operation = (a, b) => a - b;
});
refs.divideBy.addEventListener('click', () => {
  operation = (a, b) => {
    if (b === 0) {
      alert('На 0 ділити не можно');
      return null
    }
    return a / b
  }
});
refs.equalBy.addEventListener('click', () => {
  const num1 = parseInt(refs.firstNum.value);
  const num2 = parseInt(refs.secondNum.value);
  if (operation) {
    const result = operation(num1, num2);
    console.log(result)
    refs.result.textContent = result !== null ? result : '';
  }
  else {
    alert('Будь ласка, виберіть операцію');
  }
});
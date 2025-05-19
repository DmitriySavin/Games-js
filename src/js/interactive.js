const btn = document.querySelector('.section-year-btn');
btn.addEventListener('click', checkLeapYear);

function checkLeapYear() {
  const year = parseInt(document.getElementById('yearInput').value);
  const result = document.getElementById('yearResult');
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    result.textContent = 'Ви народилися у високосний рік!';
  } else {
    result.style.color = 'red';
    result.textContent = 'Це не високосний рік.';
  }
}

const button = document.querySelector('.section-number-btn');
button.addEventListener('click', guessNumber);

const secretNumber = Math.floor(Math.random() * 10) + 1;

function guessNumber() {
  const guess = parseInt(document.getElementById('guessInput').value);
  const result = document.getElementById('guessResult');
  if (guess === secretNumber) {
    result.style.color = 'green';
    result.textContent = `Вітаю, ви вгадали число! (${secretNumber})`;
  } else {
    result.style.color = 'red';
    result.textContent = `На жаль, спробуйте ще.`;
  }
}

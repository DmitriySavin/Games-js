const inputs = document.querySelectorAll('input');
const result = document.getElementById('result');

inputs.forEach(input => {
  input.addEventListener('input', () => {
    const values = Array.from(inputs).map(input => Number(input.value));
    if (values.every(val => !isNaN(val))) {
      const max = Math.max(...values);
      result.textContent = `Найбільше число, яке ви ввели – ${max}`;
    } else {
      result.textContent = 'Найбільше число, яке ви ввели – [число]';
    }
  });
});

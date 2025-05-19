const refs = {
    input: document.querySelector('#enter-time-num'),
    search: document.querySelector('.find-btn'),
    result: document.querySelector('#time-result'),
};

refs.search.addEventListener('click', onButtonClick);

function onButtonClick() {
    const minutes = refs.input.value;
    if (minutes >= 0) {
        const days = Math.floor(minutes / 1440);
        const hours = Math.floor((minutes % 1440) / 60);
        const remainMinutes = ((minutes % (1440 * 60)) % 60);
        refs.result.textContent = `${days.toString().padStart(2, '0')} дн. ${hours.toString().padStart(2, '0')} год: ${remainMinutes.toString().padStart(2, '0')} хв.` 
    }
    else {
        refs.result.textContent = alert('Введіть коректне число');
    }
}
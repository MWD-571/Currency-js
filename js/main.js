let elForm = document.querySelector('.hero__first');
let elInput = document.querySelector('.hero__input');
let elSelection = document.querySelector('.hero__main-select');
let elResetBtn = document.querySelector('.hero__second-btn');
let elResult = document.querySelector('.hero__input-result');
let UZS_TO_USD = 11237.22;
let UZS_TO_RUB = 163.66;
let UZS_TO_EUR = 12225.87;
elResetBtn.addEventListener('click', () => {
    document.location.reload();
})
elForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (elSelection.value == 'USD') {
        let input = elInput.value.trim();
        let result = input / UZS_TO_USD;
        let mainResult = result.toFixed(2);
        elResult.value = '$ ' + mainResult;
    } else if (elSelection.value == 'RUB') {
        let input = elInput.value.trim();
        let result = input / UZS_TO_RUB;
        let mainResult = result.toFixed(2);
        elResult.value = '₽ ' + mainResult;
    } else if (elSelection.value == 'EUR') {
        let input = elInput.value.trim();
        let result = input / UZS_TO_EUR;
        let mainResult = result.toFixed(2);
        elResult.value = '€ ' + mainResult;
    }
})
const selectInputs = document.querySelectorAll('select');


// FIRST SELECT INPUT FOR HOUR
for (let i = 12; i > 0; i--) {
    if (i < 10) {
        i = '0' + i;
    }
    selectInputs[0].firstElementChild.insertAdjacentHTML('afterend', `<option value= ${i}>${i}</option>`);
}


// SECOND SELECT INPUT FOR MINUTE
for (let i = 59; i >= 0; i--) {
    if (i < 10) {
        i = '0' + i;
    }
    selectInputs[1].firstElementChild.insertAdjacentHTML('afterend', `<option value= ${i}>${i}</option>`);
}


// THIRD SELECT INPUT FOR AM OR PM
for (let i = 2; i > 0; i--) {
    let am_pm;
    if (i === 1) {
        am_pm = 'AM';
    } else {
        am_pm = 'PM';
    }
    selectInputs[2].firstElementChild.insertAdjacentHTML('afterend', `<option value=${am_pm}>${am_pm}</option>`);
}
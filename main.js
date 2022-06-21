const selectInputs = document.querySelectorAll('select');
const alarmBtn = document.querySelector('button');




// FIRST SELECT INPUT FOR HOUR
for (let i = 12; i > 0; i--){
    if (i < 10){
        i = '0' + i;
    }
    selectInputs[0].firstElementChild.insertAdjacentHTML('afterend',`<option value= ${i}>${i}</option>`);
}


// SECOND SELECT INPUT FOR MINUTE
for (let i = 59; i >= 0; i--){
    if (i < 10){
        i = '0' + i;
    }
    selectInputs[1].firstElementChild.insertAdjacentHTML('afterend',`<option value= ${i}>${i}</option>`);
}


// THIRD SELECT INPUT FOR AM OR PM
for (let i = 2; i > 0; i--){
    let am_pm;
    if (i === 1){
        am_pm = 'AM';
    }
    else{
        am_pm = 'PM';
    }
    selectInputs[2].firstElementChild.insertAdjacentHTML('afterend',`<option value=${am_pm}>${am_pm}</option>`);
}


const currentDate = new Date();
const year =  currentDate.getFullYear();
const month = currentDate.getMonth();
const day = currentDate.getDate();
const hour = currentDate.getHours();
const minute = currentDate.getMinutes();
const second = currentDate.getSeconds();

console.log(year, month, day, hour, minute, second);



// FUNCTION TO DISABLE ALL SELECT INPUTS
function disableSeelect(){
    selectInputs[0].style.cursor = 'none';
    selectInputs[1].style.cursor = 'none';
    selectInputs[2].style.cursor = 'none';
}


// FUNCTION TO ENABLE ALL SELECT INPUTS
function enableSelect(){
    selectInputs[0].style.cursor = 'pointer';
    selectInputs[1].style.cursor = 'pointer';
    selectInputs[2].style.cursor = 'pointer';
}


// FUNCTION TO CHANGE ALARM BUTTON TEXT BASED ON CLICK
function changeAlarmBtnTextBasedOnClick() {
    alarmBtn.addEventListener('click', ()=>{
        if (alarmBtn.textContent === 'set alarm'){
            alarmBtn.textContent = 'stop alarm';
        }else{
            alarmBtn.textContent = 'set alarm';
        }
    });
}

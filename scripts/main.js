const selectInputs = document.querySelectorAll('select');
const alarmBtn = document.querySelector('button');
let alarm;

const alarmAudio = new Audio('./audio/alarm.mp3');




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


// FUNCTION TO DISABLE ALL SELECT INPUTS
function disableSeelect() {
    selectInputs[0].disabled = true;
    selectInputs[1].disabled = true;
    selectInputs[2].disabled = true;
}


// FUNCTION TO ENABLE ALL SELECT INPUTS
function enableSelect() {
    selectInputs[0].disabled = false;
    selectInputs[1].disabled = false;
    selectInputs[2].disabled = false;
}


function setAlarm() {
    setInterval(() => {
        let am_pm = selectInputs[2].value;
        const currentDate = new Date();

        // HANDLE HOUR DISPLAY
        let hour = currentDate.getHours();
        if (hour >= 12) {
            hour = hour - 12;
            am_pm = 'PM';

        } else {
            am_pm = 'AM';
        }


        if (hour < 10) {
            hour = '0' + hour;
        }


        // HANDLE MINUTE DISPLAY
        let minute = currentDate.getMinutes();
        if (minute < 10) {
            minute = '0' + minute;
        }


        // HANDLE SECOND DISPLAY
        let second = currentDate.getSeconds();
        if (second < 10) {
            second = '0' + second;
        }

        // DISPLAY TIME UNTIL ALARM 
        let alarmDisplay = document.querySelector('.display__values');
        alarmDisplay.textContent = `${hour}:${minute}:${second}:${am_pm}`;

        if (`${hour}:${minute}:${am_pm}` == alarm) {
            alarmAudio.play();
        }

    }, 1000);
}


setAlarm();


alarmBtn.addEventListener('click', () => {

    // CHANGE ALARM BUTTON TEXT
    if (alarmBtn.textContent === 'set alarm') {
        if (selectInputs[0].value === 'hour' || selectInputs[1].value === 'minute' || selectInputs[2].value === 'AM/PM') {

        } else {
            alarm = `${selectInputs[0].value}:${selectInputs[1].value}:${selectInputs[2].value}`;
            disableSeelect();
            alarmBtn.textContent = 'stop alarm';
        }

    } else {
        alarmBtn.textContent = 'set alarm';
        enableSelect();
    }

});

alarmBtn.addEventListener('click', ()=>{
    if (alarmBtn.textContent === 'set alarm'){
        console.log('stop alarm clicked');
        stopAlarm();
    }
});


function stopAlarm(){
    clearInterval(setAlarm());
}


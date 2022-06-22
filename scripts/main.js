const selectInputs = document.querySelectorAll('select');
const alarmBtn = document.querySelector('button');
const alarmAudio = new Audio('./audio/alarm.mp3');
let alarmDisplay = document.querySelector('.display__values');
let alarm;

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


// SET TIME INTERVAL
function setAlarmfunction() {
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
    // console.log(alarmDisplay.textContent);
    alarmDisplay.textContent = `${hour}:${minute}:${second}:${am_pm}`;

    if (`${hour}:${minute}:${am_pm}` == alarm) {
        stopAlarm();
    }
}
const setAlarm = setInterval(setAlarmfunction, 1000);


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


// FUNCTION TO STOP AND RESET ALARM
function stopAlarm() {
    clearInterval(setAlarm);
    setInterval(()=>{
        alarmDisplay.style.opacity = '0';
        alarmDisplay.style.opacity = '100';
    },1000);
    alarmAudio.play();
    alarmAudio.loop = true;
}


// END THE ALARM CLOCK AND RELOAD ON CLICK
alarmBtn.addEventListener('click', () => {
    if (alarmBtn.textContent === 'set alarm' && setAlarm) {
        location.reload();
    }
});
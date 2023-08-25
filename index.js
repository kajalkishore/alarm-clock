document.addEventListener("DOMContentLoaded", function () {
    const hoursDisplay = document.getElementById("hours");
    const minutesDisplay = document.getElementById("minutes");
    const secondsDisplay = document.getElementById("seconds");
    const alarmInput = document.getElementById("alarmTime");
    const setAlarmButton = document.getElementById("setAlarm");

    setAlarmButton.addEventListener("click", function () {
        const alarmTime = new Date(alarmInput.value);
        const currentTime = new Date();

        const timeUntilAlarm = alarmTime - currentTime;

        if (timeUntilAlarm > 0) {
            setTimeout(function () {
                alert("Wake up!");
            }, timeUntilAlarm);
        } else {
            alert("Please set a valid future time for the alarm.");
        }
    });

    function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");

        hoursDisplay.textContent = hours;
        minutesDisplay.textContent = minutes;
        secondsDisplay.textContent = seconds;
    }

    updateTime();
    setInterval(updateTime, 1000);
});

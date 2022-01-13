const timerFunction = setInterval(() => {
    
    // Converting the startTime and EndTime values to get the time in milliseconds
    const initialTime = new Date().getTime();
    const finalTime = new Date("Jan 1, 2023 00:00:00").getTime();

    // Checking the values in milliseconds
    // console.log(initialTime, finalTime);
    
    // Difference in milliseconds
    const distance = finalTime - initialTime;

    // Time calculation for days, hours, minutes, and seconds
    const totalSeconds = Math.floor(distance/1000);
    const totalMinutes = Math.floor(distance/(1000*60));
    const totalHours = Math.floor(distance/(1000*60*60));
    const totalDays = Math.floor(distance/(1000*60*60*24));

    let days = totalDays;
    let hours = totalHours - (totalDays*24);
    let minutes = totalMinutes - (totalHours*60);
    let seconds = totalSeconds - (totalMinutes*60);

    if (seconds < 10 || seconds == 0) {
        seconds = '0' + seconds;
    }
    if (minutes < 10 || minutes == 0) {
        minutes = '0' + minutes;
    }
    if (hours < 10 || hours == 0) {
        hours = '0' + hours;
    }
    if (days < 10 || days == 0) {
        days = '0' + days;
    }

    // Display the result
    const countdown = document.getElementById("countdown");
    countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${minutes}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
    `;

    // At the end of the countdown
    if (distance < 0) {
        countdown.innerHTML = `EXPIRED`;
    }
}, 1000);
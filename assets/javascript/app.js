//Create var for timer
var betweenTime;
function startClock(duration, display) {
    const timer = duration;
    const seconds;
    const minutes;

    betweenTime=setInterval(function() {
        console.log(betweenTime);

        if (timer < 0) {
            console.log(betweenTime);
            clearInterval(betweenTime);
            console.log(timer);
            timer = duration;
            console.log(duration);
            alert("")
        }
    })
}
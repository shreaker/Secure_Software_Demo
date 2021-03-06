var logoutTimer = setTimeout(logoutTimerCheck, 60000);
var logoutTime = 10;

function logoutTimerCheck()
{
    clearTimeout(logoutTimer);

    // the time has elapsed -> logout
    if (--logoutTime <= 0)
    {
        console.log("logout!");
        window.location = "/logout";

    // schedule the next ui update in 1min
    } else
    {
        logoutTimer = setTimeout(logoutTimerCheck, 60000);
        document.getElementById("force-logout").innerHTML = logoutTime.toString();
    }
}
var timer;
var timerStart;
var timeSpentOnSite = getTimeSpentOnSite();

function getTimeSpentOnSite() {
    timeSpentOnSite = parseInt(localStorage.getItem('timeSpentOnSite'));
    timeSpentOnSite = isNaN(timeSpentOnSite) ? 0 : timeSpentOnSite;
    return timeSpentOnSite;
}

function startCounting() {
    localStorage.clear();
    var session = document.getElementById('session-time');
    timerStart = Date.now();
    timer = setInterval(function() {
        timeSpentOnSite = getTimeSpentOnSite() + (Date.now() - timerStart);
        localStorage.setItem('timeSpentOnSite', timeSpentOnSite);
        timerStart = parseInt(Date.now());
        session.textContent = parseInt(timeSpentOnSite / 1000);
    }, 500);
}
startCounting();

// locationButton.addEventListener('click', () => {
//     locationButton.setAttribute('disabled', 'disabled')
//     if(navigator.geolocation){
//       navigator.geolocation.getCurrentPosition((location) => {
//         mylocation = { latitude: location.coords.latitude,
//                        longitude: location.coords.longitude
//                      }
//         socket.emit('sendLocation', mylocation, ()=> {
//           locationButton.removeAttribute('disabled')
//           console.log('Location sent!')
//         })
//       })
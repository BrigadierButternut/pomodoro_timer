function pomodoro(textTimer) {
  //Setting working period (25 minutes = 1500 seconds) and break period (5 minutes = 300 seconds)
  var workPeriod = 5;
  var breakPeriod = 10;

  countDown(workPeriod, textTimer).then(function() {
    confirm("Time for a break!")
  }).then(function() {
    countDown(breakPeriod, textTimer)
  });

}

//creating countDown function
function countDown(timeTotal, textTimer) {
  return new Promise(function(resolve, reject) {
    var timer = setInterval(
      function() {
        //Getting minutes to display
        var minutes = Math.floor(timeTotal / 60);
        if (minutes < 10) {
          minutes = "0" + String(minutes);
        } else {
          minutes = String(minutes);
        }
        //Getting seconds remaining to display
        var seconds = timeTotal % 60;
        if (seconds < 10) {
          seconds = "0" + String(seconds);
        } else {
          seconds = String(seconds);
        }

        //Updating the time displayed on the button
        document.getElementById(textTimer).innerHTML = minutes + ":" + seconds;

        timeTotal--;

        if (timeTotal < 0) {
          var ring = document.getElementById("alarm");
          ring.play();
          clearInterval(timer);
          resolve();
        }

      }, 1000);
  }); //end of promise body
}

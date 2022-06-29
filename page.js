function clock() {
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("secs");
    var am_pm = document.getElementById("am");
    var time = new Date();
    var clocka = time.getHours();
    const value=parseInt(clocka)>=12?'PM':'AM';
    am_pm.innerText=value;
  
    var clockb = time.getMinutes();
    var clockc = time.getSeconds();
    hours.innerHTML = clocka;
    minutes.innerHTML = clockb;
    seconds.innerHTML = clockc;
  }
  setInterval(clock, 1000);
  function settime() {
    let text = document.getElementsByClassName("set_time")[0];
    text.innerHTML = "Alarm set";
  }
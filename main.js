let timerOn = true;
function timer(remaining) {
  var m = Math.floor(remaining / 60);
  var s = remaining % 60
  m = m < 10 ? '0'+m:m;
  s = s < 10 ? '0'+s:s;
  document.getElementById('countdown').innerHTML = 'Time left: ${m} ${s}'
  remaining -= 1;
  if(remaining >= 0 && timerOn) {
    setTimeout(function)) {
      timer(remaining);
    }, 1000)'
    document.getElementByID("resend").innerHTML = ''
    return;
  }
  if(!timerOn) {
    return;
  }
  document.getElementByID("resend").innerHTML = 'Dont receive the code? <span class="font-weight-bold text-color cursor" onclick="timer(60)">Resend>/span>';
}
timer(60;)

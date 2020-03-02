function colorClock(){
  var d = new Date();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();

 if(hours<10){
    hours = '0'+ hours;
 }

 if(minutes<10){
    minutes = '0'+ minutes;
 }

 if(seconds<10){
    seconds = '0' + seconds;
}

   var hexaColor = '#' + seconds + minutes + hours;

   document.body.style.background = hexaColor;

   var clockFace = hours + ':' + minutes + ':' + seconds;

   document.getElementById('clock').innerHTML = clockFace; //innerHTML tulajdonság beállítja a HTML tartalmát (belső HTML)
     setTimeout( function() {colorClock(); }, 1000);  // 1000 milliszekundum után jelenítsen meg
}

colorClock();

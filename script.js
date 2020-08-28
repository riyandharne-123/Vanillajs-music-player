myStorage = window.localStorage;

function save(){
  var audio=document.querySelector('#audio');
  // var x = document.getElementById("audio").duration;
  var x = document.getElementById("audio").currentTime;
  console.log(x);
  myStorage.setItem("resumeTime", x);
  var time =myStorage.getItem('resumeTime');
    document.getElementById('resumeTime').innerText=time+'s';

}

  function resume(){
    document.getElementById("audio").currentTime=myStorage.getItem('resumeTime');
  }
  var time =myStorage.getItem('resumeTime');
  document.getElementById('resumeTime').innerText=time+'s';
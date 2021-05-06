var userName="";

function setNickName() {
  userName = document.getElementsByClassName("username")[0].value;
  if (userName == ""){
    userName = "User"
  }
  document.getElementById("name").innerHTML ="  User Name : "+userName;
}

function getNickName(){
  return userName;
}


    function disable(id){
      document.getElementById(id).disabled = true;
    } 

    function active(id){
      document.getElementById(id).disabled = false;
    } 

    function removeValues(id){
      document.getElementById(id).innerHTML = null
    }
    

var seconds = 10;
var el = document.getElementById('seconds-counter');
var paused = true;

function secondsCounter() {

  if (!paused){
    seconds -= 1;
    el.innerText = "Time Remaining : " + seconds;
    timeOut();
  }
}
var cancel = setInterval(secondsCounter, 800);

function startSecCounter(){
  paused = false;
}
function stopSecCounter(){
  paused = true;

}

function resetCounter() {
  seconds =10;
}


function timeOut(){
if (seconds == 0){
  seconds=10;
  paused = true;
  lsoe();
}
}


var totTime=0;
function totalTime(){
  totTime = totTime + (10- seconds);
return totTime;
}

var score= 0
function scoreUp(){
  score = score+10;
  return score;
}


function onlyOne(checkbox) {
  var checkboxes = document.getElementsByName('check')
  checkboxes.forEach((item) => {
      if (item !== checkbox) item.checked = false
  })
}

function lsoe(){
  alert("Game Over X_X");
  disable("answer")
  disable("nxtquestion")
  active("start")
  paused = true
}

function win(){
disable("answer")
disable("nxtquestion")
active("start")
paused = true
}


export default {
  setNickName,
  disable,
  active,
  secondsCounter,
  startSecCounter,
  resetCounter,
  stopSecCounter,
  onlyOne,
  lsoe,
  active,
  removeValues,
  win,
  totalTime,
  scoreUp,
  getNickName
  
};

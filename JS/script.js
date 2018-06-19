function start() {
   document.getElementById('q1').style.display = "block";
}
function showQ2() {
   document.getElementById('q2').style.display = "block";
   event.preventDefault();
}
function cancel() {
   document.getElementById('q1').style.display = "none";
   document.getElementById('q2').style.display = "none";
   document.getElementById('q3').style.display = "none";
   document.getElementById('q4').style.display = "none";
   document.getElementById('q5').style.display = "none";
   document.getElementById("q1").style.backgroundColor = "#FFFFFF";
   document.getElementById("q2").style.backgroundColor = "#FFFFFF";
   document.getElementById("q3").style.backgroundColor = "#FFFFFF";
   document.getElementById("q4").style.backgroundColor = "#FFFFFF";
   document.getElementById("q5").style.backgroundColor = "#FFFFFF"; 
   document.getElementById('r').style.display = "none";
   i=0;       
}
function showQ3() {
   document.getElementById('q3').style.display = "block";
}
function showQ4() {
   document.getElementById('q4').style.display = "block";
}
function showQ5() {
   document.getElementById('q5').style.display = "block";
}
var i=0;
function pr() {
  var q1a=document.getElementsByName("qq1");
  var q2a=document.getElementsByName("qq2");
  if (q1a[2].checked){
   i++;
   document.getElementById("q1").style.backgroundColor = "#89ff87";
  } 
  else{
   document.getElementById("q1").style.backgroundColor = '#ff5454';
  }
  if (q2a[0].checked) {
   i++;
   document.getElementById("q2").style.backgroundColor = "#89ff87";
  }
   else{
   document.getElementById("q2").style.backgroundColor = "#ff5454";
  }
  document.getElementById('r').style.display = "block";
  let q3a=document.qetElementsByClass("qq3");
 function rez() {
 }

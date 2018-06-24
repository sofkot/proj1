function start() {
   document.getElementById('q1').style.display = "block";
}
function showQ2() {
   document.getElementById('q2').style.display = "block";
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
   document.getElementById('q6').style.display = "none";
   document.getElementById('q7').style.display = "none";
   document.getElementById('q8').style.display = "none";
   document.getElementById('q9').style.display = "none";
   document.getElementById('q10').style.display = "none";
   document.getElementById("q6").style.backgroundColor = "#FFFFFF";
   document.getElementById("q7").style.backgroundColor = "#FFFFFF";
   document.getElementById("q8").style.backgroundColor = "#FFFFFF";
   document.getElementById("q9").style.backgroundColor = "#FFFFFF";
   document.getElementById("q10").style.backgroundColor = "#FFFFFF";
   document.getElementById('q11').style.display = "none";
   document.getElementById('q12').style.display = "none";
   document.getElementById('q13').style.display = "none";
   document.getElementById('q14').style.display = "none";
   document.getElementById('q15').style.display = "none";
   document.getElementById("q11").style.backgroundColor = "#FFFFFF";
   document.getElementById("q12").style.backgroundColor = "#FFFFFF";
   document.getElementById("q13").style.backgroundColor = "#FFFFFF";
   document.getElementById("q14").style.backgroundColor = "#FFFFFF";
   document.getElementById("q15").style.backgroundColor = "#FFFFFF";
   document.getElementById('r').style.display = "none";
   document.getElementById('rezult').style.display = "none";
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
function showQ6() {
   document.getElementById('q6').style.display = "block";
}
function showQ7() {
   document.getElementById('q7').style.display = "block";
}
function showQ8() {
   document.getElementById('q8').style.display = "block";
}
function showQ9() {
   document.getElementById('q9').style.display = "block";
}
function showQ10() {
   document.getElementById('q10').style.display = "block";
}
function showQ11() {
   document.getElementById('q11').style.display = "block";
}
function showQ12() {
   document.getElementById('q12').style.display = "block";
}
function showQ13() {
   document.getElementById('q13').style.display = "block";
}
function showQ14() {
   document.getElementById('q14').style.display = "block";
}
function showQ15() {
   document.getElementById('q15').style.display = "block";
}
var i=0;

function pr() {
//////////1 вопрос//////////////
  var q1a=document.getElementsByName("qq1");
  if (q1a[2].checked){
   i++;
   document.getElementById("q1").style.backgroundColor = "#89ff87";
  }
  else {
   document.getElementById("q1").style.backgroundColor = '#ff5454';
  }
//////////2 вопрос//////////////
  var q2a=document.getElementsByName("qq2");
  if (q2a[0].checked) {
   i++;
   document.getElementById("q2").style.backgroundColor = "#89ff87";
  }
  else {
   document.getElementById("q2").style.backgroundColor = "#ff5454";
  }
//////////3 вопрос//////////////
  var q3a=document.getElementsByName("qq3");
  if (q3a[0].checked && q3a[5].checked && q3a[1].checked && q3a[2].checked && q3a[3].checked && q3a[4].checked && q3a[6].checked && q3a[7].checked) {
      i++;
      document.getElementById("q3").style.backgroundColor = "#89ff87";
  }
  else {
      if (q3a[0].checked || q3a[5].checked || q3a[1].checked || q3a[2].checked || q3a[3].checked || q3a[4].checked || q3a[6].checked || q3a[7].checked) {
         document.getElementById("q3").style.backgroundColor = "#FFAD18";
      }
      else{
         document.getElementById("q3").style.backgroundColor = "#ff5454";
      }
  }
//////////4 вопрос//////////////
  if(document.getElementById("textarea").value != "1"){
  document.getElementById("q4").style.backgroundColor = '#ff5454';
  }
  else{
   i++;
   document.getElementById("q4").style.backgroundColor = "#89ff87";
  }
//////////5 вопрос//////////////
var q5a=document.getElementsByName("qq5");
if (q5a[2].checked) {
 i++;
 document.getElementById("q5").style.backgroundColor = "#89ff87";
}
else {
 document.getElementById("q5").style.backgroundColor = "#ff5454";
}
//////////6 вопрос//////////////
var q6a=document.getElementsByName("qq6");
if (q6a[1].checked) {
 i++;
 document.getElementById("q6").style.backgroundColor = "#89ff87";
}
else {
 document.getElementById("q6").style.backgroundColor = "#ff5454";
}
//////////7 вопрос//////////////
var q7a=document.getElementsByName("qq7");
if (q7a[3].checked) {
 i++;
 document.getElementById("q7").style.backgroundColor = "#89ff87";
}
else {
 document.getElementById("q7").style.backgroundColor = "#ff5454";
}
//////////8 вопрос//////////////
var q8a=document.getElementsByName("qq8");
if (q8a[2].checked) {
 i++;
 document.getElementById("q8").style.backgroundColor = "#89ff87";
}
else {
 document.getElementById("q8").style.backgroundColor = "#ff5454";
}
//////////9 вопрос//////////////
var q9a=document.getElementsByName("qq9");
if (q9a[1].checked) {
 i++;
 document.getElementById("q9").style.backgroundColor = "#89ff87";
}
else {
 document.getElementById("q9").style.backgroundColor = "#ff5454";
}
//////////10 вопрос//////////////
var q10a=document.getElementsByName("qq10");
if (q10a[3].checked) {
 i++;
 document.getElementById("q10").style.backgroundColor = "#89ff87";
}
else {
 document.getElementById("q10").style.backgroundColor = "#ff5454";
}
//////////11 вопрос//////////////
var q11a=document.getElementsByName("qq11");
if (q11a[2].checked) {
 i++;
 document.getElementById("q11").style.backgroundColor = "#89ff87";
}
else {
 document.getElementById("q11").style.backgroundColor = "#ff5454";
}
//////////12 вопрос//////////////
var q12a=document.getElementsByName("qq12");
if (q12a[0].checked) {
 i++;
 document.getElementById("q12").style.backgroundColor = "#89ff87";
}
else {
 document.getElementById("q12").style.backgroundColor = "#ff5454";
}
//////////13 вопрос//////////////
var q13a=document.getElementsByName("qq13");
if (q13a[1].checked) {
 i++;
 document.getElementById("q13").style.backgroundColor = "#89ff87";
}
else {
 document.getElementById("q13").style.backgroundColor = "#ff5454";
}
//////////14 вопрос//////////////
var q14a=document.getElementsByName("qq14");
if (q14a[2].checked) {
 i++;
 document.getElementById("q14").style.backgroundColor = "#89ff87";
}
else {
 document.getElementById("q14").style.backgroundColor = "#ff5454";
}
//////////15 вопрос//////////////
  var q15a=document.getElementsByName("qq15");
  if (q15a[0].checked && q15a[5].checked && q15a[1].checked && q15a[2].checked && q15a[4].checked && q15a[6].checked) {
      i++;
      document.getElementById("q15").style.backgroundColor = "#89ff87";
  }
  else {
      if (q15a[0].checked || q15a[5].checked || q15a[1].checked || q15a[2].checked || q15a[4].checked || q15a[6].checked) {
         document.getElementById("q15").style.backgroundColor = "#FFAD18";
      }
      else{
         document.getElementById("q15").style.backgroundColor = "#ff5454";
      }
    }
document.getElementById('r').style.display = "block";
}
function rez(){
   document.getElementById('rezult').style.display = "block";
}


   //document.getElementById("q2").style.backgroundColor = "#89ff87";
   //document.getElementById("q2").style.backgroundColor = "#FFAD18";
   //document.getElementById("q2").style.backgroundColor = "#ff5454";

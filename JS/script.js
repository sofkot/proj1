function start() { //функция показывающая 1-ый блок
   document.getElementById('q1').style.display = "block";
}
function showQ2() {//функция показывающая 2-ой блок
   document.getElementById('q2').style.display = "block";
}
function cancel() { //Функция скрывающая блоки (с вопросами), убирающая заливку
   document.getElementById('q1').style.display = "none";//скрывает блок (1 вопрос)
   document.getElementById('q2').style.display = "none";//скрывает блок (2 вопрос)
   document.getElementById('q3').style.display = "none";//скрывает блок (3 вопрос)
   document.getElementById('q4').style.display = "none";//скрывает блок (4 вопрос)
   document.getElementById('q5').style.display = "none";//скрывает блок (5 вопрос)
   document.getElementById("q1").style.backgroundColor = "#FFFFFF";//убирает заливку (верный/ложный ответ)
   document.getElementById("q2").style.backgroundColor = "#FFFFFF";//убирает заливку (верный/ложный ответ)
   document.getElementById("q3").style.backgroundColor = "#FFFFFF";//убирает заливку (верный/ложный ответ)
   document.getElementById("q4").style.backgroundColor = "#FFFFFF";//убирает заливку (верный/ложный ответ)
   document.getElementById("q5").style.backgroundColor = "#FFFFFF";//убирает заливку (верный/ложный ответ)
   document.getElementById('q6').style.display = "none";//скрывает блок (6 вопрос)
   document.getElementById('q7').style.display = "none";//скрывает блок (7 вопрос)
   document.getElementById('q8').style.display = "none";//скрывает блок (8 вопрос)
   document.getElementById('q9').style.display = "none";//скрывает блок (9 вопрос)
   document.getElementById('q10').style.display = "none";//скрывает блок (10 вопрос)
   document.getElementById("q6").style.backgroundColor = "#FFFFFF";//убирает заливку (верный/ложный ответ)
   document.getElementById("q7").style.backgroundColor = "#FFFFFF";//убирает заливку (верный/ложный ответ)
   document.getElementById("q8").style.backgroundColor = "#FFFFFF";//убирает заливку (верный/ложный ответ)
   document.getElementById("q9").style.backgroundColor = "#FFFFFF";//убирает заливку (верный/ложный ответ)
   document.getElementById("q10").style.backgroundColor = "#FFFFFF";//убирает заливку (верный/ложный ответ)
   document.getElementById('q11').style.display = "none";//скрывает блок (11 вопрос)
   document.getElementById('q12').style.display = "none";//скрывает блок (12 вопрос)
   document.getElementById('q13').style.display = "none";//скрывает блок (13 вопрос)
   document.getElementById('q14').style.display = "none";//скрывает блок (14 вопрос)
   document.getElementById('q15').style.display = "none";//скрывает блок (15 вопрос)
   document.getElementById("q11").style.backgroundColor = "#FFFFFF";//убирает заливку (верный/ложный ответ)
   document.getElementById("q12").style.backgroundColor = "#FFFFFF";//убирает заливку (верный/ложный ответ)
   document.getElementById("q13").style.backgroundColor = "#FFFFFF";//убирает заливку (верный/ложный ответ)
   document.getElementById("q14").style.backgroundColor = "#FFFFFF";//убирает заливку (верный/ложный ответ)
   document.getElementById("q15").style.backgroundColor = "#FFFFFF";//убирает заливку (верный/ложный ответ)
   document.getElementById('r').style.display = "none";//скрывает блок "узнать результат"
   document.getElementById('rezult').style.display = "none";////скрывает блок результатов
   i=0;//обнуление счётчика
}
function showQ3() { //функция показывающая 3-ий блок
   document.getElementById('q3').style.display = "block";
}
function showQ4() { //функция показывающая 4-ый блок
   document.getElementById('q4').style.display = "block";
}
function showQ5() { //функция показывающая 5-ый блок
   document.getElementById('q5').style.display = "block";
}
function showQ6() { //функция показывающая 6-ой блок
   document.getElementById('q6').style.display = "block";
}
function showQ7() { //функция показывающая 7-ой блок
   document.getElementById('q7').style.display = "block";
}
function showQ8() { //функция показывающая 8-ой блок
   document.getElementById('q8').style.display = "block";
}
function showQ9() { //функция показывающая 9-ый блок
   document.getElementById('q9').style.display = "block";
}
function showQ10() { //функция показывающая 10-ый блок
   document.getElementById('q10').style.display = "block";
}
function showQ11() { //функция показывающая 11-ый блок
   document.getElementById('q11').style.display = "block";
}
function showQ12() { //функция показывающая 12-ый блок
   document.getElementById('q12').style.display = "block";
}
function showQ13() { //функция показывающая 13-ый блок
   document.getElementById('q13').style.display = "block";
}
function showQ14() { //функция показывающая 14-ый блок
   document.getElementById('q14').style.display = "block";
}
function showQ15() { //функция показывающая 15-ый блок
   document.getElementById('q15').style.display = "block";
}
var i=0; //создание пустой переменной для счётчика

function pr() { //Функция проверки ответов
//////////1 вопрос//////////////
  var q1a=document.getElementsByName("qq1");//создание переменной для ответов 1-ого вопроса
  if (q1a[2].checked){ //условие для проверки верности ответа
   i++; //увеличение счётчика
   document.getElementById("q1").style.backgroundColor = "#89ff87";//заливка блока - верно
  }
  else {
   document.getElementById("q1").style.backgroundColor = '#ff5454';//заливка блока - неверно
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
  if (q3a[0].checked && q3a[5].checked && q3a[1].checked && q3a[2].checked && q3a[3].checked && q3a[4].checked 
      && q3a[6].checked && q3a[7].checked) {
      i++;
      document.getElementById("q3").style.backgroundColor = "#89ff87";
  }
  else {
      if (q3a[0].checked || q3a[5].checked || q3a[1].checked || q3a[2].checked || q3a[3].checked || q3a[4].checked 
          || q3a[6].checked || q3a[7].checked) {
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
///Блокирование кнопки "Проверить"/////
var chec=document.getElementById("check");
chec.setAttribute("disabled", "true");
}
function rez(){ //Функция, показывающая блок с результатами и счётчик
   document.getElementById('rezult').style.display = "block";
   document.getElementById("result").innerHTML = i;
}

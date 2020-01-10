// 式と合計のdocument.getElementById()
var total = document.getElementById('total');
// 0~9のdocument.getElementById()
var number0 = document.getElementById('number0');
var number1 = document.getElementById('number1');
var number2 = document.getElementById('number2');
var number3 = document.getElementById('number3');
var number4 = document.getElementById('number4');
var number5 = document.getElementById('number5');
var number6 = document.getElementById('number6');
var number7 = document.getElementById('number7');
var number8 = document.getElementById('number8');
var number9 = document.getElementById('number9');
// .(小数点)のdocument.getElementById()
var few = document.getElementById('few');
// Cのdocument.getElementById()
var clear = document.getElementById('clear');
// ±のdocument.getElementById()
var chaeng = document.getElementById('chaeng');
// %のdocument.getElementById()
var percent = document.getElementById('percent');
// ÷のdocument.getElementById()
var division = document.getElementById('division');
// ×のdocument.getElementById()
var multiplication = document.getElementById('multiplication');
// -のdocument.getElementById()
var subtraction = document.getElementById('subtraction');
// +のdocument.getElementById()
var addition = document.getElementById('addition');
// =のdocument.getElementById()
var equal = document.getElementById('equal');

// ============================================
// 0~9をdivの子要素<p>として出力する処理
// 冗長なので他の処理を後に探す。
number0.onclick = function(){
  var P = document.createElement('p');
  P.innerHTML = number0.value;
  total.appendChild(P);
}
number1.onclick = function(){
  var P = document.createElement('p');
  P.innerHTML = number1.value;
  total.appendChild(P);
}
number2.onclick = function(){
  var P = document.createElement('p');
  P.innerHTML = number2.value;
  total.appendChild(P);
}
number3.onclick = function(){
  var P = document.createElement('p');
  P.innerHTML = number3.value;
  total.appendChild(P);
}
number4.onclick = function(){
  var P = document.createElement('p');
  P.innerHTML = number4.value;
  total.appendChild(P);
}
number5.onclick = function(){
  var P = document.createElement('p');
  P.innerHTML = number5.value;
  total.appendChild(P);
}
number6.onclick = function(){
  var P = document.createElement('p');
  P.innerHTML = number6.value;
  total.appendChild(P);
}
number7.onclick = function(){
  var P = document.createElement('p');
  P.innerHTML = number7.value;
  total.appendChild(P);
}
number8.onclick = function(){
  var P = document.createElement('p');
  P.innerHTML = number8.value;
  total.appendChild(P);
}
number9.onclick = function(){
  var P = document.createElement('p');
  P.innerHTML = number9.value;
  total.appendChild(P);
}
few.onclick = function(){
  var P = document.createElement('p');
  P.innerHTML = few.value;
  total.appendChild(P);
}

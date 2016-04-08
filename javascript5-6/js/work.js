var h1 = document.getElementsByTagName('h1')[0],
  start = document.querySelector('.start'),
  clear = document.querySelector('.clear'),
  timePassed = document.querySelector('.passed strong'),
  milliseconds = 0,
  seconds = 0,
  minutes = 0,
  hours = 0,
  t,
  k = 0;

/*Я объявляю две переменные для супер точного определения времени. 
Я буду их использовать в твоей функции selector(). Кстати прочитай в
от эти рекомендации https://learn.javascript.ru/coding-style 
З.Ы. Особенно обрати внимание на принципы написания функций ~_~
*/
var t0, t1;

function timer() {
  milliseconds = milliseconds + 5;
  if (milliseconds >= 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  /*в принципе сразу видно что здесь происходит, но когда начинаешь раскладывать это в голове, она начинает болеть. тут нужно упростить написание.
  желательно вынести все эти тернарники в функцию, которая возвращает готовую строку и уже её записать
  */
  /*   вот кстати интересный вариант 
    var t = [hours, minutes, seconds, milliseconds];  //записываешь все свои значения в массив
    var s = t.map(function(z) {                  //вызываешь для каждого элемента функцию
      return ('00' + z).slice(-2)                //добавляешь к своему числу два нуля в начало. потом вырезаешь последние два символа и записываешь новое значение вместо старого
    }).join(':');    //соединяешь все значения в одну строку разделя их с помощью ":"
    выглядит это примерно вот так:
    допустим сейчас hours = 0, minutes = 1, seconds = 35
    "00"+hours -> 000 -> вырезаешь последние две цифры -> 00
    "00"+milliseconds -> 001 -> вырезаешь последние две цифры -> 01
    "00"+seconds -> 0035 -> вырезаешь последние две цифры -> 35
    теперь твой массив t равен [00,01,35]
    потом с помощью .join(':') твой массив склеивается в строку "00:01:35"
    проблема тут только с миллисекундами, потому что там три цифры.
    если отбросить миллисекунды то можно так это всё написать:
    var t = [hours, minutes, seconds]; 
    var s = t.map(function(z) {
      return ('00' + z).slice(-2)
    }).join(':'); 
    h1.innerHTML = s;
  */

  h1.innerHTML =
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
    (seconds > 9 ? seconds : "0" + seconds) + "." +
    (milliseconds > 9 ? (milliseconds > 99 ? milliseconds : "0" + milliseconds) :
      "00" + milliseconds);
};

function pauseTimer() {  //странное название для функции с таким поведением

  if (k === 0) {
    t0 = performance.now();   //Это моя переменная для подсчета времени (старт)
    t = setInterval(timer, 1);
    start.innerHTML = 'pause';  //работу с DOM желательно вынести в отдельную функцию
    start.classList.add('btn-primary'); //работу с DOM желательно вынести в отдельную функцию
    start.classList.remove('btn-success'); //работу с DOM желательно вынести в отдельную функцию
    k++;
  } else {
    t1 = performance.now();  //Это моя переменная для подсчета времени (стоп)
    writePassedTime();
    //console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")  // вывод результата
    clearInterval(t);  
    start.innerHTML = 'start';  //работу с DOM желательно вынести в отдельную функцию
    start.classList.add('btn-success');  //работу с DOM желательно вынести в отдельную функцию
    start.classList.remove('btn-primary'); //работу с DOM желательно вынести в отдельную функцию
    k = 0;
  }
};

function reset() {
  clearInterval(t);
  h1.innerHTML = "00:00:00.000";
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  k++;  // нужно подобрать более говорящее имя для этой переменной. 
  pauseTimer();
};

//Это моя функция для проверки прошедшего времени. Оцени погрешность
function writePassedTime(){
  timePassed.innerHTML = t1 - t0;
}

start.addEventListener("click", pauseTimer);
clear.addEventListener("click", reset);
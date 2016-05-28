'use strict';

(function ($) {
  $(function () {

    $('#search').on('submit', request);
    var div = document.createElement('div');
    div.style.padding = '20px';
    div.style.fontSize = '20px';
    $('body').append(div);

    function request(e) {

        e.preventDefault();
        var text = $('#search__field').val();

        $.ajax({
          url: 'http://api.riffsy.com/v1/search',
          data: {
            limit: 6,
            tag: text
          },
          dataType: 'json',
          success: function (data) {
            div.innerHTML = '';
            if (data.results.length != 0) {
              $.each(data.results, function (i, val) {
                var img = document.createElement('img');
                img.src = val.itemurl;
                img.title = val.title;
                img.style.width = '30%';
                div.appendChild(img);
              });
            } else {
              div.innerText ='Ничего не найдено, попробуйте еще раз';
            }
          }

        });
      }
    });
})(jQuery);


//часть 2//
function Human(){
  this.name ="Jack";
  this.age = "20";
  this.sex = "male";
  this.height =  "175";
  this.weight = "70";
}

function Worker (){
  this.job = "IT";
  this.salary =  "3000";
  this.works = function(){
      console.log("I'm working!");
     }
}

Worker.prototype = new Human;

function Student (){
  this.university = "ZNTU";
  this.stipend = "500";
  this.hobby = function(){
    console.log("I'm watching serials!");
  }
}
Student.prototype = new Human;

var worker1 = new Worker();

var worker2 = new Worker();
    worker2.name = 'Kate';
var worker3 = new Worker();
    worker3.weight = "65";


var student1 = new Student();

var student2 = new Student();
student2.grant = "400";
var student3 = new Student();
student3.name = 'Helena';

console.log(worker1);
console.log(worker2);
console.log(worker3);

console.log(student1);
console.log(student2);
console.log(student3);
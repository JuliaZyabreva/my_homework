function Human(){
  this.name ="Jack";
  this.age = "20";
  this.sex = "male";
  this.height =  175;
  this.weight = 70;
}
var newHuman = new Human();


function Worker (){
  this.job = "IT";
  this.salary =  3000;
  this.works = function(){
    console.log("newWorker5.works         = ","I'm working!");
  }
}
Worker.prototype = newHuman;


function Student (){
  this.placeOfStudy = "ZNU";
  this.scholarship = 500;
  this.hobby = function(){
    console.log("newStudent5.hobby        = ","I'm watching serials!");
  }
}
Student.prototype = newHuman;


var newWorker1 = new Worker();
var newWorker2 = new Worker();
var newWorker3 = new Worker();
var newWorker4 = new Worker();
var newWorker5 = new Worker();
var newWorker6 = new Worker();


console.log("newWorker1.name          = ",newWorker1.name);
console.log("newWorker2.sex           = ",newWorker2.sex);
console.log("newWorker3.job           = ",newWorker3.job);
console.log("newWorker4.salary        = ",newWorker4.salary);
newWorker5.works();
console.log("newWorker6.placeOfStudy  = ",newWorker6.placeOfStudy); //undefined
console.log(" ");

var newStudent1 = new Student();
var newStudent2 = new Student();
var newStudent3 = new Student();
var newStudent4 = new Student();
var newStudent5 = new Student();
var newStudent6 = new Student();

console.log("newStudent1.age          = ",newStudent1.age);
console.log("newStudent2.weight       = ",newStudent2.weight);
console.log("newStudent3.placeOfStudy = ",newStudent3.placeOfStudy);
console.log("newStudent4.scholarship  = ",newStudent4.scholarship);
newStudent5.hobby();
console.log("newStudent6.job          = ",newStudent6.job); //undefined
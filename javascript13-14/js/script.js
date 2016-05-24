$(function() {
   'use strict;'

   'use strict;'

   var data = {

      categories: [{
         questionName: "Сколько пальцев на руке?",
         variant: [{
            answer: '10',
            rigth: false
         }, {
            answer: '6',
            rigth: false
         }, {
            answer: '5',
            rigth: true
         }],
         inputName: ['11', '12', '13']
      }, {
         questionName: "Какой сейчас год?",
         variant: [{
            answer: '2016',
            rigth: true
         }, {
            answer: '2116',
            rigth: false
         }, {
            answer: '2007',
            rigth: false
         }],
         inputName: ['21', '22', '23']
      }, {
         questionName: "У ежа - ежата, у ужа - ...",

         variant: [{
            answer: 'ужата',
            rigth: true
         }, {
            answer: 'ужики',
            rigth: false
         }, {
            answer: 'никого',
            rigth: false
         }],
         inputName: ['31', '32', '33']
      }],
      result: "Узнать результат"
   };
   localStorage.setItem('data', JSON.stringify(data));
   var page = localStorage.getItem('data');
   var myData = JSON.parse(page);
   //end of localStorage end object

   //template 

   var html = $('#test').html();
   var $body = $('body');

   var content = tmpl(html, {
      data: myData
   });

   $body.append(content);

   //end template


   //modal window
   var $overlay;
   var $modal = $('.js-modal');
   var $close = $('.js-close');
   var $result = $('.js-result');

   function showModal(e) {
      e.preventDefault();
      $close.one('click', hideModal);

      $overlay = $('<div class="overlay"></div>');
      $body.append($overlay);
      $modal.addClass('show');

      // FIND ALL INPUTS
      $('.block').each(function() {
         var $that = $(this);
         $that.find('input[type="checkbox"]');
      });

      // Find default correct answers
      var rightAnswers = [];
      for (var i = 0; i < myData.categories.length; i++) {
         for (var j = 0; j < myData.categories[i].variant.length; j++) {
            var currentAnswer = myData.categories[i].variant[j].rigth;
            rightAnswers.push(currentAnswer);
         }
      }

      //collected user answers
      var givenAnswers = [];
      $('input[type="checkbox"]').each(function() {
         if ($(this).prop('checked')) {
            givenAnswers.push(true);
         } else {
            givenAnswers.push(false);
         }
      });

      var result = JSON.stringify(givenAnswers) === JSON.stringify(rightAnswers);
      if (result) {
         $result.text('Ураааааааааа! Все ответы верны=)')
      } else {
         $result.text('Увы...пройдите тест снова...');
         
      }

      //delete checked
      $('input[type="checkbox"]').each(function() {
         $(this).removeAttr("checked");
      });

   };

   function hideModal() {
      $overlay.remove();
      $modal.removeClass('show')
   }

   $('.js-verify').on('click', showModal);
});
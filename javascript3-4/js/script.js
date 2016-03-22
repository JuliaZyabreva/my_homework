var app = {

	createElement: function(params) {
		var element = document.createElement(params.tagName);

		if (params.inputType) {
			element.setAttribute('type', params.inputType);
		}

		if (params.className){
			element.className = params.className;
		}

		if (params.content){
			element.innerHTML = params.content;
		}

		if (params.parentElement) {
			params.parentElement.appendChild(element);
		}
		
		return element;
	},
	
	generateQuestions: function(questionsAmount, answersAmount) {

		for (var i = 0; i < questionsAmount; i++) {

			this.createElement({
			   tagName: 'h2',
			   content: 'Вопрос №' + (i + 1),
			   parentElement: form
			});

			var ul = this.createElement({
               tagName: 'ul',
               parentElement: form
            });

		for (var j = 0;  j < answersAmount; j++) {

            var li = this.createElement({
   		        tagName: 'li',
        	    parentElement: ul
            });

			var label = this.createElement({
			    tagName: 'label',
			    content: 'Вариант ответа №' + (j + 1),
			    parentElement: li
			});

			var checkbox = this.createElement({
			    tagName: 'input',
			    inputType: 'checkbox'
			});



			label.insertAdjacentElement('afterBegin', checkbox);
			}
		}
	}
};

var wrapper = app.createElement ({
    tagName: 'div',
    parentElement: document.body,
    className: 'wrapper'
});

app.createElement ({
	tagName: 'h1',
	content: 'Тест по програмированию',
	parentElement: wrapper
});


var form = app.createElement ({
	tagName: 'form',
	parentElement: wrapper
});


app.generateQuestions (3,3);

var btn = document.createElement("button");   
     
var t = document.createTextNode("Проверить мои результаты");       
btn.appendChild(t);                                
document.body.appendChild(btn);


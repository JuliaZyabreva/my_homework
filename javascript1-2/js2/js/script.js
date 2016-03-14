var names = new Array(5);
var userName;
var flag;

for (var i = 0; i < names.length; i++) {
	if (i == 0) {
		names[i] = prompt('Введите имя:');		
	} else {
		names[i] = prompt('Введите следующее имя:');
	}
}

userName = prompt('Введите имя пользователя:');

for (var i = 0; i < names.length; i++) {
	if (names[i] == userName) {
		flag = true;
	}
}

if (flag) {
		alert(userName + ', вы успешно вошли!');
} else{
		alert('Ошибка! Неверное имя пользователя.');
}


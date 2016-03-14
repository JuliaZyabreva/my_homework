function pow(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {
    result *= x;
  }
  return result;
};

var x,n;
  x = prompt("Введите число:", '');
  if (x < 50) {
	n = prompt("Введите степень:", '');
  }else{
	alert('Слишком большое число. Введите число меньше 50');
};


if (n < 0) {
  alert('Степень ' + n +
    'не поддерживается, введите степень больше 0'
  );
} else {
  console.log( pow(x, n) );
};


 
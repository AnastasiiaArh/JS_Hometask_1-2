var names = [];
names.length = 5;
for (var i = 0; i < names.length; i++) {
 names[i] = prompt ("Введите имя № " + (i + 1), '');
}

var yourName = prompt ("Введите пожалуйста Ваше имя", '')

if ([].indexOf) {
  var find = function(array, value) {
    return array.indexOf(value);
  }
} else {
  var find = function(array, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === value) return i;
    }
    return -1;
  }
}

var results = find (names, yourName);

if (results >= 0) {
  alert (names[results] + ", вы успешно вошли")
}
else {
  alert ("ошибка 404")
}

function pow(x, n) {
  var result = 1;
if (n >= 0) {

for (var i = 1; i <= n; i++) {
    result *= x;
  }
    return result;
}
  for (var i = -1; i >= n; i--) {
    result *= x;
}
    return (1 / result);
}

  var x = prompt("x?", '');
if (x % 1 == 0)
{
  var n = prompt("n?", '');
if (n % 1 == 0)
 {
console.log('результат pow', pow(x, n) );
}
else
{
  alert('Степень ' + n +
    ' не поддерживается, введите целую степень'
  );
}
}
else
{
  alert('Число ' + x +
    ' не поддерживается, введите целое число'
  );
}

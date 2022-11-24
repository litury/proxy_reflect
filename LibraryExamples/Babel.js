/**
 * ------------- ПРИМЕР ------------------ *
 *               BABLE
 * --------------------------------------- *
 */
// Babel Input: ES2015 arrow function
[1, 2, 3].map(n => n + 1);
// Babel Output: ES5 equivalent
[1, 2, 3].map(function(n) {
  return n + 1;
});
function name(e,r, ...args){ // es6
	console.log(args,e,r)
}
function name(e, r) {// та же функция но через бабель для поддержки старых сред выполнения
  for (
    var _len = arguments.length,
      args = new Array(_len > 2 ? _len - 2 : 0),
      _key = 2;
    _key < _len;
    _key++
  ) {
    args[_key - 2] = arguments[_key];
  }
   console.log(args, e, r);
}
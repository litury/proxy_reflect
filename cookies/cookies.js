/**
 * ------------- ПРИМЕР ------------------ *
 *               COOKIE
 * --------------------------------------- *
 */
// записываем в куки ключ=значение
document.cookie = "user=John";
// добавим в куки новые ключ=значение
document.cookie = 'countDowloads=5'
// user=John; countDowloads=5
console.log(document.cookie);
// можем закодировать
function setCookie(name, value) {
  let encodeName = encodeURIComponent(name);
  let encodeValue = encodeURIComponent(value);
  let cookie = `${encodeName}=${encodeValue}`;
  document.cookie = cookie;
}
// можем раскодировать и сразу парсить в объект
function getCookie() {
  return decodeURIComponent(document.cookie).split('; ').reduce((acc, item) => {
    const [name, value] = item.split('=')
    return { ...acc, [name]: value }
  }, {})
}
setCookie('password', 'qwerty');
//console.log(document.cookie);
console.log(getCookie());
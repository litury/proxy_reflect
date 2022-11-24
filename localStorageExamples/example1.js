/**
 * ----------- ПРИМЕР ----------- *
 *          LOCALSTORAGE
 * ------------------------------ *
 */

// создадим некоторую переменную
const someVarible = {
    name : 'test',
    value: true
}

// удаление значения по ключу
localStorage.removeItem('someVarible')

console.log(localStorage.getItem('someVarible'))
// запсиь в LocalStorage
// на самом деле запишется строка
localStorage.setItem('someVarible', JSON.stringify(someVarible));
// Мы не можем применить к объекту метод toString() не потеряв данные
// так мы положим только [object Object]

// метод глобального объекта
console.log(localStorage.getItem('someVarible'))

// вернем наш объект из LocalStorage
const newVari = JSON.parse(localStorage.getItem('someVarible'))
console.log(newVari);

// метод позволяющий почистить LocalStorage
localStorage.clear()
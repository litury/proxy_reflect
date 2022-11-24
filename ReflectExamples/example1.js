/**
 * ============ ПРИМЕРЫ-ШПАРГАЛКИ ============== *
 *            Объекты PROXY REFLECT
 * ---------- использование Reflect ------------ *
 */

let user = { name: 'Николай', age: 29 };

let proxyUser = new Proxy(user, {
  get(target, prop, receiver) {
    if (prop == 'name') {
      console.log('Кто-то читает имя!')
    }
    // return target[prop] - без Reflect
    Reflect.get(target, prop, receiver)
  }
});

// Reflect - это объект, который предоставляет методы, для работы с объектом
testFunction.apply(this, argsArr) // вызов какой-то функции с заданым контекстом

Reflect.apply(testFunction, this, argsArr) // более современный вызов функции с заданым this

const chinaAddress = new Address(argsArr) // создание нового объекта с помощью консткуктора Address

const chinaAddress2 = Reflect.construct(Address, argsArr) // то же создание только через Reflect 

const duck = {
  name: 'Maurice',
  color: 'white',
  greeting: function() {
    console.log(`Quaaaack! My name is ${this.name}`);
  }
}

Reflect.has(duck, 'color'); 
// true
Reflect.has(duck, 'haircut');
// false

Reflect.set(duck, 'eyes', 'black');
// вернет "true" если свойство успешно запишется
// duck= {..., eyes: 'black'}

Reflect.deleteProperty(foo, 'bar')
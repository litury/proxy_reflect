/**
 * ============ ПРИМЕРЫ-ШПАРГАЛКИ ============== *
 *            Объекты PROXY REFLECT
 * ------------ РАБОТА С ОБЪЕКТАМИ ------------- *
 *
 *  Тут демонстрируем, что после того, как мы
 *  проксировали объект - необходимо уже работать
 *  именно с userProxy дабы не путаться
 */

let user = { name: 'Николай', age: 29 };

const userProxy = new Proxy( user, {
    get(target,prop){
        return target[prop]
    },
    set(target, prop, value) {
        if (prop in target) {
            target[prop] = value
        } else {
            // если бы не проксировали -- добавилось бы новое свойство
            // а если его не существует -- выкидываем ошибку
            throw new Error(`${prop} не существует в ${target}`)

        }
    },
    has(target, prop) {
        // проверяем присутствует или нет
        return ['name','age'].includes(prop)
        // а можем "скрыть" например age
        // вот так
        // return ['name'].includes(prop)
    },
    deleteProperty(target, prop) {
      delete target[prop];
      return true
    }

})

userProxy.name = "Петя"
//
console.log(user.name); // тоже изменилось на Петя
console.log(userProxy.name);
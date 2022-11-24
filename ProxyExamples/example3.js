/**
 * ============ ПРИМЕРЫ-ШПАРГАЛКИ ============== *
 *            Объекты PROXY REFLECT
 * ------------ РАБОТА С ФУНКЦИЕЙ -------------- *
 *
 */

const fun = vari => `it is new ${vari}`

const funProxy = new Proxy(fun, {
    // thisArg - контекст
    // argArray - параметры
    apply(target, thisArg, argArray) {
        // например привели все к верхнему регистру
        return target.apply(thisArg, argArray).toUpperCase()
    }
})

console.log(funProxy('proxy'));
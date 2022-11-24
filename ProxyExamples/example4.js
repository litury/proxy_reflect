/**
 * ============ ПРИМЕРЫ-ШПАРГАЛКИ ============== *
 *            Объекты PROXY REFLECT
 * ------------- РАБОТА С КЛАССОМ -------------- *
 */
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const UserProxy = new Proxy(User,{
    construct(target, argArray) {

        return new Proxy(new target(...argArray),{
            set(targ,prop){
                console.log('Можем теперь реализовать свою логику работы с объектом')
                return targ[prop];
            }
        });
    }
})

let user = new UserProxy('Николай', 28)
//user.age = 22;
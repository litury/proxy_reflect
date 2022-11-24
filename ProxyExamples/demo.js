/**
 * ============ ПРАКТИКА ЗАНАЯТИЯ ============== *
 *
 * ----------------- ПРИМЕРЫ ------------------- *
 *            Объекты PROXY REFLECT
 * --------------------------------------------- *
 */
//let arr = 'sfsdfdsf';
//console.log(Math.max(...arr))

let fun = (str) => {return str}

/**
 * -------- ПРИМЕР Proxy НАД ФУНКЦИЕЙ ---------- *
 *           Проксируем функцию fun              *
 * --------------------------------------------- *
 * @type {function(str): log str || UpperCase}
 */
const myFun = new Proxy(fun,{
    // в объекте handler показываем, как меняется вызов функции
    apply(target, thisArg, argArray) {
        console.log('My Fun !')
        // вернет нам саму функцию
        // + приведет возвращаемое значение к верхнему регистру
        return target.apply(thisArg,argArray).toUpperCase();
    }
})
//console.log(myFun(arr))

/**
 * -------- ПРИМЕР Proxy НАД КЛАССОМ ----------- *
 *        Познавательное баловство :D            *
 * -------- Проксируем класс Array ------------- *
 * @type {ArrayConstructor}
 */
const myArray = new Proxy(Array,{
    // в объекте handler показываем, как меняется конструктор класса
    construct(target, argArray, newTarget) {
        let objProxy =[];
        let row = argArray[0];
        let col = argArray[1];

        for (let i = 0; i < row; i++){
            let rowN = []
            for (let j =0; j< col; j++){
                rowN.push(j+i);
            }
            objProxy.push(rowN);
        }
        // По факту, мы так же вернем полноценный массив
        // То есть экземпляр класса Array
        // но теперь это наш прокси над предопределенным классом Array
        return objProxy;
    }
})
let arr = new myArray(3,3);

//console.log(arr);
// можем обойти массив перепирающими методами
// которые есть у Array, а значит у нашего прокси тоже
arr.forEach((row) => {
    console.log(row.reduce((a,i) => a + i));
})

/**
 * ------- ПРИМЕР Proxy НАД ОБЪЕКТОМ ----------- *
 *          Проксируем объект person             *
 * --------------------------------------------- *
 * @type {{name: string, age: number, friends: string[]}}
 */
let person = {
    name: 'Vasya',
    age: 33,
    friends: ['Vasya', 'Kolya', 'Anna']
}

let personProxy = new Proxy(person, {
    // в объекте handler показываем,
    // как меняется установка значения свойства объекта
    set (target, prop, value) {
        if (prop !== 'friends'){
            Reflect.set(target,prop, value);
        } else {
            // Так показали на занятии
            //let addFrinds = value.split('_');
            // Можно еще интереснее
            // Используем регулярное выражение: либо ',' либо ' ' либо '_'
            let addFrinds = value.split(new RegExp('\_|\ |\,'))
            for (let friend of addFrinds){
                target[prop].push(friend);
            }
        }
    }
})

personProxy.friends = "Fedya_Olya Katya,Leon";
console.log(personProxy.friends);
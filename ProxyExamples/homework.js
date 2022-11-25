/**
 * ============= ДОМАШНЕЕ ЗАДАНИЕ ==================== *
 *            Объекты PROXY REFLECT                    *
 * ---------- !!! тут ДВЕ задачи !!! ----------------- *
 *
 * -------- Код ниже реализует следующее: ------------ *
 * 1. объект оборачивается в прокси
 * 2. базовый метод данного объекта set переопределяется
 * 3. теперь, если set применяется по отношению к свойству friends мы не переписываем заново массив друзей, а просто добавляем х
 * 4. при это мы можем передать несколько друзей в строке и разделить их символом '_'
 * 5. когда мы обращаемся к свойству friends объекта прокси и присваиваем ему какое-то значение вызывается базовый метод set
 * 6. видим, что мы действительно теперь можем довольно просто добавлять друзей
 * --------------------------------------------------- *

 * ----------------- ЗАДАНИЕ №1 ---------------------- *
 * ---- Добавьте в Proxy метод get так, чтобы: ------- *
 * 1. Мы могли получать значения сразу нескольких свойств одной строкой
 * 2. Например, если мы напишем console.log(personProxy.name_profession_citizen) то получим вывод "Vasya Frontend developer Moscow"
 * 3. Если введем console.log(personProxy.age_citizen_name_age), то получим "33 Moscow Vasya 33"
 * --------------------------------------------------- *
 */
let arr = [];

let person = {
	name: "Vasya",
	age: 33,
	profession: "Frontend developer",
	citizen: "Moscow",
	friends: ['Kolya', 'Anya', 'Misha'],

	getNameAge() {
		return `${this.name} ${this.age}`;
	},
	getProfCity() {
		return `${this.profession} ${this.citizen}`
	},
	makeDiff() {
		console.log('doSomething');
	},
	writeChannel() {
		console.log('any stream');
	}
}

let personProxy = new Proxy(person, {


	set(target, prop, value) {
		if (prop !== 'friends') {
			// для всех кроме свойства friends действуем по-умолчанию
			Reflect.set(target, prop, value);
		} else {
			// а вот friends теперь будет пополнять массив значениями через '_'
			let addFriends = value.split('_');
			for (let friend of addFriends) {
				target.friends.push(friend);
			}
		}
	},

	get(target, prop) {

		if (typeof target[prop] !== 'object') {
			if (prop.includes('_')) {
				return prop.split('_').map((prop) => target[prop]).join(' ')
			} else {
				return target[prop]
			}
		} else {
			return target[prop]
		}
	},

	ownKeys(target) {
		return Object.keys(target).filter(key => key.startsWith('get'))
	}
})


console.log(personProxy.age_citizen_name_age)

/**
 * ----------------- ЗАДАНИЕ №2 ---------------------- *
 * 1. Выяснить, какие базовые методы вызываются у объекта когда к нему применяют цикл for (let prop in personProxy)
 * 2. Проксировать эти методы таким образом, чтобы при прохождении идентификаторов свойств объекта
 *  циклом for...in в prop попадали только методы, которые начинаются с get
 *  3. в цикле for...in пройтись по идентификаторам свойств объекта и вызывать полученные в prop методы
 *  4. убедиться что были вызваны только методы get...
 * --------------------------------------------------- *
 */

for (let key in personProxy) {
	console.log(personProxy[key]())
}

let range = {
	start: 1,
	end: 10
};

range = new Proxy(range, {
	has(target, prop) {
		return prop >= target.start && prop <= target.end
	}
});

let user = {};

Reflect.set(user, 'name', 'Вася');
console.log(user.name)

user = new Proxy(user, {
	get(target, prop, receiver) {
		console.log(`GET ${prop}`);
		return Reflect.get(target, prop, receiver);
	},
	set(target, prop, value, receiver) {
		console.log(`SET ${prop}=${value}`);
		return Reflect.set(target, prop, value, receiver);
	}
});

let name = user.name;
user.name = "Петя";
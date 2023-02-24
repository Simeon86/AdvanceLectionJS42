// winsow.addEventListener('DOMContentLoaded', () => {
	
// });	


console.log('/////////////////////////////CLASS/////////////////////////////')

class MyClass {
    constructor() {
        
    }

    method1() {

    }

    method2() {

    }
}

class User {
    constructor(username) {
        this.username = username;
    }

    onBreakMessage() {
        console.log(`${this.username} is on break!`);
    }

    method2() {

    }
}

let userOne = new User('Simeon');
let userTwo = new User('Valeria');

console.log(userOne);
console.log(userOne.onBreakMessage());
console.log(userTwo);
console.log(userTwo.onBreakMessage());

console.log(userOne === userTwo);
console.log(userOne === User)

console.log('//////////////////////////////////////////////////////////')

class User1 {

    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
        // return 'Opa'
    }

    set name(value) {
        if(value.length < 3) {
            console.error('Name is too short')
            return
        }
        this._name = value;
    }
}

let user = new User1('Caloyan');

console.log(user);

user.name = 'Iva';
console.log(user);

user.name = 'Bo';
console.log(user);


for(let key in user) 
console.log(key)

console.log('//////////////////////////////////////////////////////////')

class User2 {

    username = 'Ivan';

    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
        // return 'Opa'
    }

    set name(value) {
        if(value.length < 3) {
            console.error('Name is too short')
            return
        }
        this._name = value;
    }
}

let user1 = new User2('Caloyan');

console.log(user1);

user1.name = 'Iva';
console.log(user1);

user1.name = 'Bo';
console.log(user1);


for(let key in user1) 
console.log(key)

let user2 = new User2('Petyr');
console.log(user2)

console.log(user2 instanceof User2);
console.log(user2 instanceof Object);
console.log(user1 instanceof User2 && user2 instanceof User2);

console.log('//////////////////////////////////////////////////////////')

class User3 {
    name = 'Simeon';

    sayHi() {
        alert(this.name)
    }
}

let user3 = new User3()

console.log(User3)
user3.sayHi()
// User3.sayHi() no work

console.log('//////////////////////////////////////////////////////////')

class Greeting {
    great = prompt('Hello, whats your name');
}
let greet = new Greeting()

console.log(greet)

console.log('//////////////////////////////////////////////////////////')

class Animal {
    constructor(name) {
        this.speed = 0
        this.name = name;
    }

    move(speed) {
        this.speed = speed;
        console.log(`${this.name} is moving with ${this.speed} speed`)
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} stopped move`);
    }
}

let animal = new Animal('dog');
console.log(animal)

animal.move(23)
console.log(animal)

animal.stop()
console.log(animal)

class Rabbit extends Animal {
    jump() {
        console.log(`${this.name} jumped`);
    }

    stop() {
        console.log(`${this.name} has no brakes`);
    }
}

let rabbit = new Rabbit('rabbit')

console.log(rabbit)

console.log(rabbit.jump());
console.log(rabbit.move());
console.log(rabbit.stop())

console.log(rabbit instanceof Rabbit);
console.log(rabbit instanceof Animal);

console.log(rabbit.stop())

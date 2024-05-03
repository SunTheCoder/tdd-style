class Person {
    constructor(name, age) {
      this.name
      this.age
    }

    sayHello(greeting) {
      return `${this.name} says ${greeting}.`
    }

    visit(otherPerson) {
      return `${this.name} visited ${otherPerson}.`
    }

    switchVisit(otherPerson) {
      //this.visit()  bind??
    }

    update(obj) {
      if (typeof obj !== 'object') {
        throw TypeError('Argument is not an object!')
      } else {
        this.name = obj.name
        this.age = obj.age
      }
      
    }

    tryUpdate(obj) {

    }
}

let coolPerson = new Person("mai", 32); // Person { name: 'mai', age: 32 }

coolPerson.update({ name: "lulu", age: 57 });
console.log(coolPerson); // Person { name: 'lulu', age: 57 }


module.exports = Person;

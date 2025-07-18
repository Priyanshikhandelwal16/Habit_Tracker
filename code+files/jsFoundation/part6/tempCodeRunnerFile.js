// // // console.log(myNewArray.hitesh());
//Encapsulation and Getter & Setter✅
// // class User{
// //     #password
// //     constructor(name){
// //       this.name = name
// //     }
// //     get password(){
// //         return `Access Denied`
// //     }

// //     set password(value){
// //         if(value.length==6){
// //             this.#password = value
// //         }
// //         else{
// //             console.log("Eroor is not of 6 characters");
            
// //         }
// //     }
// // }

// // let user1 = new User("sanya")
// // user1.password = "123"
// // console.log(user1.password)


// class CredirCard{
//     #limit
//     constructor (amount){
//      this.amount = amount
//     }

//     set amount(value){
//         if (value<100000) {
//             console.log(`Amount is : ${value}`)
//         }
//         else{
//             console.log("large amount")
//         }
//     }

//     get amount(){
//         return `Amount is find`
//     }
// }

// let price = new CredirCard("2111100")


//Polymorphism✅

class Pet{
    
    makeSound(){
       return `some sound`
    }
}

class Dog extends Pet{
    makeSound(){
        return 'Woof'
            }
}

class Cat extends Pet{
    makeSound(){
      return 'Meow'
    }
}

class Cow extends Pet{
    makeSound(){
      return 'Ahn Ahn'
    }
}

 let pets = [new Cat(), new Cow() , new Dog(), new Pet()]
//  pets.forEach(p=>console.log(p.makeSound()))
// let cow = new Cow("Geeta")
// console.log(cow.makeSound())


//Abstraction
class CoffeMachine{
    #heatWater(){
        return `Heating water`
    }
    makeCoffee(){
        let heat = this.#heatWater();
        return `${heat} Coffee is ready!`
    }
}

let coffee = new CoffeMachine
// console.log(coffee.makeCoffee())

//Inheritance
class Person {
    constructor(name,age){
        this.name = name,
        this.age = age
    }
}
 class student extends Person{
    constructor(name,age,course){
            super(name,age);
        this.course = course
    }
    introduce(){
        return `New course ${this.course} is ready name is ${this.name} and age is ${this.age}`
    }
 }

 class teacher extends Person{
    constructor(name,age,subject){
        super(name,age);
        this.subject = subject
    }
    introduce(){
        return `New subject ${this.subject} is started by ${this.name} and Age is ${this.age}`
    }
 }

let s1 = new student("English", "Priya", "18")
// console.log(s1.introduce())


class Calculator{
    static isValidNumber(n){
     return typeof n==='number'
    }
    calculate(){
       return 0
    }
}

class add extends Calculator{
    constructor(a,b){
        super();
         this.a = a,
       this.b = b
    }
    calculate(){
      return this.a + this.b
    }
}

class sub extends Calculator{
     constructor(a,b){
        super();
         this.a = a,
       this.b = b
    }
    calculate(){
       return this.a - this.b
    }
}

class Multiply extends Calculator{
     constructor(a,b){
        super();
         this.a = a,
       this.b = b
    }
    calculate(){
       return this.a * this.b
    }
}

class divide extends Calculator{
     constructor(a,b){
        super();
         this.a = a,
       this.b = b
    }
    calculate(){
       return this.a / this.b
    }
}

let num = new sub("8" , "4")
// console.log(num.calculate())

class Employee{
    constructor(name,department){
        this.name = name,
        this.department = department
    }
    getRole(){

    }
}

class Manager extends Employee{
    constructor(name,department){
        super()
        this.name = name,
        this.department = department
    }
    getRole(){
        return `Name: ${this.name} Department: ${this.department}`
    }
}

// let e1 = new Manager("Priya","CSE")
// console.log(e1.getRole())


class BankUser{
    #balance =0
    #accountNumber = "9876543210"
    deposit(amount){
        this.#balance+=amount
    }
    withdraw(amount){
   if (amount > this.#balance) {
     console.log("Insufficient balance")
   }
   else{
    this.#balance-=amount
   }
    }
    get info(){
        return `Account is ****${this.#accountNumber.slice(-4)},Balance is ${this.#balance}`
    }
}

let user = new BankUser();
user.deposit(10000);
user.withdraw(3000)
console.log(user.info())
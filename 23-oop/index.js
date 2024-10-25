//! Object

// let araba = {
//   renk: "mavi",
//   hiz: 0,
// };

// console.log(araba.renk);
// console.log(araba.hiz);

//! Method

// let araba = {
//   renk: "mavi",
//   hiz: 0,
//   hizlandir:
//   function (deger) {
//     this.hiz += deger;
//   },
// };

// araba.hizlandir(40);
// console.log(araba.hiz);

//! Constructor ES5

// function Araba(renk){
//   this.renk = renk;
//   this.hiz = 10;

// };

// Araba.prototype.hizlandir = function(deger){
//   this.hiz += deger;
// }

// let araba = new Araba("red");

// console.log(araba.renk);
// araba.hizlandir(100)
// console.log(araba.hiz);

//! Constructor ES6

// class Araba{

//   constructor(renk){
//     this.renk = renk;
//   }
// }
// let araba = new Araba("kırmızı")
// console.log(araba.renk);

//! Class

// class Araba {
//   constructor(renk) {
//     this.renk = renk;
//     this.hiz = 0;
//   }
//   hizlandir(deger) {
//     this.hiz += deger;
//   }
// }

// let araba = new Araba("siyah");
// console.log(araba.renk);
// araba.hizlandir(150);
// console.log(araba.hiz);

//! Inheritace

// class Araba {
//       constructor(renk){
//         this.renk = renk;
//       }
// };

// class MotorluAraba extends Araba {
//   constructor (renk,motor){
//     super(renk)
//     this.motor = motor;
//   }
// };

// let motorAraba = new MotorluAraba("siyah", "V8");
// let araba = new Araba("red")

// console.log(motorAraba.renk);
// console.log(motorAraba.motor);
// console.log(araba.renk);

//! Encapsulation

// class Araba{
//   #renk;
//   constructor(renk,hiz){
//     this.#renk = renk;
//     this.hiz = hiz;
//   }
//   getRenk(){
//     return this.#renk;
//   }
//   setRenk(renk){
//   this.#renk = renk;
//   }
// };

// const araba = new Araba("red",10);
// console.log(araba.getRenk());
// araba.setRenk("blue")
// console.log(araba.getRenk());

//! Polymorphism

// class Shape {
//     draw() {
//         console.log("şekil çiziliyor");
//     }
// }

// class Circle extends Shape {
//     draw(radius) {
//         console.log(`${radius} radiuslu bir daire çiziliyor`);
//     }
// }

// let shape = new Shape();
// let circle = new Circle();
// console.log(circle.draw("20"));

//! Abstraction

class Database {
  constructor(data) {
    this._data = data;
  }
  getData() {
    return this._data;
  }
  setData(value) {
    this._data = value;
  }
}

class DataController extends Database {
  constructor(data) {
    super(data);
  }
  getData() {
    return "Data: " + super.getData();
  }
}

const database = new Database("Emin");
const dataController = new DataController("Nur");

console.log(database._data);
dataController.setData("caner");
console.log(dataController._data);

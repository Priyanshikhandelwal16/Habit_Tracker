let computer = { cpu: 12 };
let lenovo = {
  screen: "HD",
  __proto__: computer,
};
// let tomHardware = {};

// console.log(`lenovo `, lenovo.__proto__);

let genericCar = { tyres: 4 };

let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);

// console.log(`tesla `, Object.getPrototypeOf(tesla));

// let flower= {
//      love: "rose",
//      beautiful: "lotus",
// };

// let city ={
//     suncity: "jodhpur",
//     pinkcity : "jaipur",
// };

// Object.setPrototypeOf(flower,city);
// console.log(city.suncity);


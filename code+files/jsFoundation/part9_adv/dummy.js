// function employeedata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve({name:"riya" , age:"21"})
//         }, 3000);
//     })
// }

// async function getdata() {
//     console.log("Data is fetching")
//     const userData = await employeedata()
//     console.log("data is fetched")
//     console.log("data is:" , userData)
// }

// getdata()


// function carName(name){
//     this.name = name
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Car name is;"+ this.name)
//         }, 3000);
//     })
// }

// carName("Alto").then((car) =>{
//      try {
//         if (car.length==="6") {
//             console.log(`Nmae is ${this.name}`)
//         } else {
//             console.log("name is greater than 4")
//         }
//     } catch (error) {
//         console.error("Error",error)
//     }
// })


function carName(name){
   this.name = name
   return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve("car name is" + this.name)
      }, 2000);
   })
}

async function showname() {
    const car = await carName("Lomborgini")
    try {
        if (car.length>="6") {
            console.log(`Name is ${this.name}`)
        } else {
            console.log("Name is less than 6")
        }
    } catch (error) {
        console.error("Error")
    }
}

showname()
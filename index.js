//original object
// const customer = {
//     firstName: "jake",
//     lastName:  "smith",
//     email:     "jaekSmih!aol.com",
//     phone:     undefined,
//     zipCode:    "631",
//     favoriteFlavors: 32,
//     cupSize:    "medium",
//     favoriteStore: "Target",
//     firstVisit:    false,

    
// }

// console.log(customer)

//modifing an object
// const customer = {
//     firstName: "jake",
//     lastName: "smith",
//     email: "jaekSmih!aol.com",
//     phone: undefined,
//     zipCode: "631",
//     favoriteFlavors: 32,
//     cupSize:  "medium",
//     favoriteStore: "Target",
//     firstVisit:  false,

// }
// //modifing an object
// customer["email"] = "jak3Smith1992@email.com"
// customer["phone"] = 3195551234
// customer["zipCode"] = "63132"
// customer["favoriteFlavors"] = ["coffee", "strawberry",  "matcha"]

//console.table(customer)
//deleting items

// const customer = {
//     firstName: "jake",
//     lastName:  "smith",
//     email: "jak3Smith1992@email.com",
//     phone: 3195551234,
//     zipCode: "63132",
//     favoriteFlavors: ["coffee", "strawberry", "matcha"],
//     cupSize: "medium",
//     favoriteStore: "Target",
//     firstVisit: false
    
// }

// delete customer.zipCode
// delete customer.favoriteStore

// console.log(customer)

//adding to objects
// const customer = {
//     firstName: "jake",
//     lastName: "smith",
//     email: "jak3Smith1992@email.com",
//     phone: 3195551234,
//     favoriteFlavors: [ "coffee", "strawberry", "matcha"],
//     cupSize: "medium",
//     firstVisit: false
// }

// customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"]
// customer.futureFlavors = "mango"
// customer.todaysPurchaseCost = 5.32

// console.table(customer)

// //adding  an array

const customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jak3Smith1992@email.com",
    phone: 3195551234,
    favoriteFlavors: [ "coffee", "strawberry", "matcha"],
    cupSize: "medium",
    firstVisit: false,
    toppings: ["chocolate sprinkles", "wafer straws", "gummy bears"],
    futureFlavors: "mango",
    todaysPurchaseCost: 5.32
}

const keys = Object.keys(customer)

console.log(keys)

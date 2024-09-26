let score:number | string = 33
score =44
score = "55"

// type User = {
//     name:string; 
//     id:number
// }

type Admin = {
    userName:string;
    id:number
}

// let hitesh: User | Admin = {name:"hitesh",id:334}
// hitesh = {userName:"hc",id:334}


// function getDbId(id:number | string){
//     console.log(`DB id is : ${id}`)
// }
// getDbId(3)
// getDbId("3")

// if in function you out id.toUppercase then it will throw error
//as it can be number or string also so it will throw error

// function getDbId(id:number | string){
//    if(typeof id=== "string"){
//     id.toUpperCase()
//    }
// }
// getDbId(3)
// getDbId("3")

//array

//if i want a aaray of string and number then it wil throw error
const data:number[] = [1,2,3]
const data2:string[] = ["1","2","3"]
const data3:string[] | number[] = ["1","2","3"]
// the above condition means that it can be all number or
// all string array

//but we want number string combination array

const data4:(string | number)[] = ["1",2,"3"]

// literal type of assignment where we want fix value 

let pi:3.14 = 3.14
let seatAlotment:"aisle" | "middle" | "window"

seatAlotment="aisle"
// but other than this three value its not possible to assign any new value
// seatAlotment="screw"
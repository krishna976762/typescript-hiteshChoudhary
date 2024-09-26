function addTwo(num:number){
    return num+2
}
addTwo(5)

function getUpper(val:string){
    return val.toUpperCase()
}
getUpper("krishna  ")

function singnUpUser(name:string,email:string,isPaid:boolean){}
singnUpUser("krishna","krishna@gmail.com",false)
 
// wha if we dont want to pass any of parms by default value
function loginUser(name:string,email:string,isPaid:boolean=false){}
loginUser("krishna","krishna@first.com")

function addTwoNum(num:number){
    // return num+2
    // but if insted of returning  a number i returned a string then
    return "krishna"
    // still typescript will not give error so for handling to them
    // i need to do
}
//we need to write function like this
function addTwoNum2(num:number) : number{
    return num+2
}

//but what if on condition based we retrun differect things 
// function getValue(myVal:number):boolean{
//     if(myVal>5){
//         return true
//     }else{
//         return "200 ok"
//     }
// }

//we will discuss above scniaro after some time
// ans boolean | string

// Arrow function

const getHello = (s:string):string =>{
//    if we are not returning any thing then it will throw error
    // if we are defininf function return type then you need to return
    return ""
    // something compulsery
}

const heros = ["thor","spiderman","ironman"]
//const heros=[1,2,3,4]

heros.map((hero):string =>{
    return `hero is ${hero}`
})
 
//if function are not returning anything
function consoleError(errMsg:string): void{
    console.log(errMsg)
}
 
//if 
function handleError(errmsg:string):never{
    throw new Error(errmsg) 
}


export {}
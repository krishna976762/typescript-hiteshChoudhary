// STRING
let gretings:string = "Hello Krishna"
console.log(gretings)

// NUMBER

// first way
let userId: number = 10000
//second way
let userId2 =10000
userId.toFixed()
// here we are applying number method to userid so thats why no
//need to declare type typescript will get it its number

//BOOLEAN
let isLoggedIn: boolean = false

//any
let hero;
function getHero(){
    return "Thor"
}

hero =getHero()

export {}
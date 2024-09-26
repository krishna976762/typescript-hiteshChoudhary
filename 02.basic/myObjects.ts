const User = {
    name:"krishna",
    email:"krishna@gmail.com",
    isActive:true
}

function createUser({name:string,isPaid:boolean}){

}
createUser({name:"krishna",isPaid:true})

// function shortSintax():{}{
//     return {}
// }

function createCourse():{}{
    return {}
}

// If you are declaring the type of return then you need to return it
function createPaidCourse():{name:string,price:number}{
    return {name:"reactjs",price:3300}
}

//type ALICE
// type User = {
//     name:string;
//     email:string;
//     isActive:boolean;
// }

// function createUsers(user:User){}

// createUsers({name:"", email:"",isActive:false})

// if we want some paramentrs should not get updated once initalize
//then we can use readonly keyword so it will not allowed to override

type User = { 
    // readonly means you canot updatet this
readonly _id:string;
name:string;
email:string;
isActive:boolean;
// if we want some options as optional to pass then we use  ?
creadcardDetails?:number
}

let myUser: User ={
   _id:"12ad",
   name:"krishna",
   email:"krishna@gmail.com",
   isActive:true
}

myUser.name= "krishna bokefod"
// but this is not allowed
// myUser._id = "afaf"


// MIX

type cardNumber = {
    cardnumber:string
}
type cardDate= {
    cardDate:string
}

type cardDetails = cardNumber & cardDate &{
    cvv:number
}

export {}
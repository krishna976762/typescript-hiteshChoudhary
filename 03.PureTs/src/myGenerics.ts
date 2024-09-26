const score:Array<number> = []
const names:Array<string>=[]

function identityOne(val:boolean|number):boolean|number{
    return val
}

// the issue in above function is if we cant predict the type of
// arugment then it will be diffcult to address how many condition we
//will write like boolean|number|string

// TWO WAYS TO RESOVE THIS ISSUE

function identityTwo(val:any):any{
    return val
}

function identityThree<Type>(val:Type):Type{
    return val
}

// difference between any and type is that any as any type 
//as input is string and return is number not fixed as its any

//so when we use <type>then it will lock the type once argument is 
// string means you need to return type string this is fixed
identityThree(3)

// short syntax
function identityFour<T>(val:T):T{
    return val
}

// you can create your own object also
interface Bootle{
    brand:string,
    type:number
}

// identityFour<Bootle>({})

// if we want to Array type
function getSearchProducts<T>(products:T[]):T{
    // do some database operations
    const myIndex =3
    return products[myIndex]
}

const getMoreSearchProducts = <T>(products:T[]):T=>{
    // do some database operations
    const myIndex =4
    return products[myIndex]
}

// we can write like this also
// const getMoreSearchProducts = <T,>(products:T[]):T=>{
// this ',' is just for letting know this is generics

// their can be multiple generic types
function anotherFunction<T,U>(valOne:T,valTwo:U):object{
    return{
        valOne,
        valTwo
    }
}
anotherFunction(3,"4")

//we can use extends also but if we use extends then we need
// to use that type strickly

function anotherFunction2<T,U extends Number>(valOne:T,valTwo:U):object{
    return{
        valOne,
        valTwo
    }
}
anotherFunction2(3,12.2)

interface Quiz{
    name:string,
    type:string
}

interface Course{
    name:String,
    author:String,
    subject:string
}

class Sellable<T>{
    public cart:T[] = []
    
}
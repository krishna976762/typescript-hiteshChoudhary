function detectType(val:number | string){
    if(typeof val === "string"){
        val.toLowerCase()
    }else{
        return val + 3
    }
   
}


// NARROWING

// f a variable is declared with a union type 
// (e.g., string | number), TypeScript cannot assume the exact 
// type at first. Type narrowing helps determine the exact type 
// within a particular block of code, allowing appropriate operations 
// based on that type.
function printALl(strs:string | string[] | null){
    if(strs){
        if(typeof strs === "object"){
            for(const s of strs){
                console.log(s)
            }
        }else if(typeof strs === "string"){
            console.log(strs)
        }

    }
} 

// The in operator can check if a property exists in an object, 
// which is useful for narrowing types in union objects.

interface User5{
    name:string
    email:string
}
interface Admin{
    name:string,
    email:string,
    isAdmin:boolean
}

function isAdminAccount(account:User | Admin){
    if("isAdmin" in account){
        return account.isAdmin
    }else{
        return false
    }
}
// instace of narrowing

function logValue(x: Date | string){
   
    if(x instanceof Date){
        console.log(x.toUTCString)
    }else{
        console.log(x.toUpperCase)
    }
}

//USING TYPE PREDICATES
type Fish = {swim:() => void}
type Bird = {fly:() => void}

function isFish(pet:Fish | Bird):pet is  Fish{
    return (pet as Fish).swim !== undefined
} 

function getFood(pet:Fish | Bird){
    if(isFish(pet)){
        pet
        return "Fish Food"
    } else {
        pet
        return "Bird Food"
    }
}

// Never type
interface Circle{
    kind:"circle",
    radius:number
}
interface Square{
    kind:"square"
    side:number
}
interface Rectangle{
    kind:"rectangle"
    width:number
    length:number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(Shape:Shape){
    if(Shape.kind === "circle"){
        return Math.PI * Shape.radius **2
    }
    // return Shape.side * Shape.side
}

function getArea(shape:Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius **2
        case "square":
            return shape.side * shape.side
        case 'rectangle':
            return shape.length * shape.width
        default:
            const _defaultforshape: never = shape
            return _defaultforshape
    }
}


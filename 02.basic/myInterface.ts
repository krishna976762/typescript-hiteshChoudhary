interface User{
    readonly dbId:number,
    email:string,
    userId:number, 
    googleId?:string,
    //startTrail:() => string
    //alternative way for above
    startTrail():string
    getCoupon(couponname:string):number
}

// here if you are taking it from somewhere and you want to add
//extra some extra property to this so you can do it
//also ? before : means its not compulseary
interface User{
    githubToken?:string
}


const hitesh:User = {dbId:22,email:"krishna@gmail.com",userId:121,
    startTrail:() =>{
        return "trail started"
    },
    getCoupon:(name:"krishna10") =>{
        return 10
    }
}

hitesh.email = "k@b.com"

//ypu can extends it also

interface Admin extends User {
    role:"admin" | "ta" | "learner"
}

const krishna:Admin = {
    dbId:22,
    email:"krishna@gmail.com",
    userId:100,
    role:"admin",
    githubToken:"github",
    startTrail:() =>{
        return "hello world"
    },
    getCoupon(couponname) {
        return 10
    },
}
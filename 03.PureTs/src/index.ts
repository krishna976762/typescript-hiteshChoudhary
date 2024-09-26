// console.log("Typescript is here")

//how to create clases 
class User{
    email:String
    name:string
    readonly city:string="Jaipur"
    constructor(email:string,name:string){
        this.email=email;
        this.name=name;
    }
}

const hitesh = new User("krishna@gmail.com","krishna")

// If you want some variable as private that no one can see it
//then you can use priavte keyword before that 


// another method of writingit
class User2{
    readonly city: string = "Jaipur"
    constructor(
        public email:string,
        public name:string
    ){

    }
}

// GETTER AND SETTER
class User3{
    private _courseCount =1
    readonly city:string = "Jaipur"
    constructor(
        public email:string,
        public name:string,
    ){

    }

    get getAppleEmail():string{
        return `apple ${this.email}`
    }

    // in the setter we didnt declare the return type of function return
    set courseCount(courseNum:number){
        if(courseNum <=1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}


// Procted
// procted is such thing that it allow to do operatio on variable 
// in its class and in its extended version also
class User4{
    protected _courseCount =1
    readonly city:string = "Jaipur"
    constructor(
        public email:string,
        public name:string,
    ){

    }

    get getAppleEmail():string{
        return `apple ${this.email}`
    }

    // in the setter we didnt declare the return type of function return
    set courseCount(courseNum:number){
        if(courseNum <=1){
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}
class SubUSer extends User4{
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}
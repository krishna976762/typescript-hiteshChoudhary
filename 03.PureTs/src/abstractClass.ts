class TakePhoto2{
    constructor(
        public cameraMode:String,
        public abc:string
    ){}
}
const kb = new TakePhoto2("test","test")

// but when we will use abstract class then we cant create a object
// using class

abstract class TakePhoto3{
    constructor(
        public cameraMode:String,
        public abc:string
    ){}
}
// const kb2 = new TakePhoto2("test","test")
// so we can extend this class and we can create object instance
class Instagram2 extends TakePhoto3{

}
const kb2= new Instagram2("test","test")
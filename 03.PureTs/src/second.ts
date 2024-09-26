interface TakePhoto{
    cameraMode:String
    filter:string
    burst:number
}

class Instgram implements TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){}
}
// you can add more property to it but not less
class Youtube implements TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number,
        public like:number
    ){}
}

interface Story{
    createStory():void
}

// suppose now we have a class in which we want to use this both interface
// so we cant write it directly we need to follow a way

class Youtube2 implements TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number,
        public like:number
    ){}

    createStory():void{
        console.log("Story was created")
    }
}
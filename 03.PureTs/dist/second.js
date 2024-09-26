"use strict";
class Instgram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
// you can add more property to it but not less
class Youtube {
    constructor(cameraMode, filter, burst, like) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.like = like;
    }
}
// suppose now we have a class in which we want to use this both interface
// so we cant write it directly we need to follow a way
class Youtube2 {
    constructor(cameraMode, filter, burst, like) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.like = like;
    }
    createStory() {
        console.log("Story was created");
    }
}

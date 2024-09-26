"use strict";
// console.log("Typescript is here")
//how to create clases 
class User {
    constructor(email, name) {
        this.city = "Jaipur";
        this.email = email;
        this.name = name;
    }
}
const hitesh = new User("krishna@gmail.com", "krishna");
// If you want some variable as private that no one can see it
//then you can use priavte keyword before that 
// another method of writingit
class User2 {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Jaipur";
    }
}
// GETTER AND SETTER
class User3 {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Jaipur";
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    // in the setter we didnt declare the return type of function return
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
// Procted
// procted is such thing that it allow to do operatio on variable 
// in its class and in its extended version also
class User4 {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Jaipur";
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    // in the setter we didnt declare the return type of function return
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUSer extends User4 {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}

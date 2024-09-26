"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("krishna  ");
function singnUpUser(name, email, isPaid) { }
singnUpUser("krishna", "krishna@gmail.com", false);
// wha if we dont want to pass any of parms by default value
function loginUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
loginUser("krishna", "krishna@first.com");
function addTwoNum(num) {
    // return num+2
    // but if insted of returning  a number i returned a string then
    return "krishna";
    // still typescript will not give error so for handling to them
    // i need to do
}
//we need to write function like this
function addTwoNum2(num) {
    return num + 2;
}
//but what if on condition based we retrun differect things 
// function getValue(myVal:number):boolean{
//     if(myVal>5){
//         return true
//     }else{
//         return "200 ok"
//     }
// }
//we will discuss above scniaro after some time
// Arrow function
var getHello = function (s) {
    return "";
    // if we are defininf function return type then you need to return
    // something compulsery
};
var heros = ["thor", "spiderman", "ironman"];
//const heros=[1,2,3,4]
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
//if function are not returning anything
function consoleError(errMsg) {
    console.log(errMsg);
}
//if 
function handleError(errmsg) {
    throw new Error(errmsg);
}

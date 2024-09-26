"use strict";
function detectType(val) {
    if (typeof val === "string") {
        val.toLowerCase();
    }
    else {
        return val + 3;
    }
}
// NARROWING
// f a variable is declared with a union type 
// (e.g., string | number), TypeScript cannot assume the exact 
// type at first. Type narrowing helps determine the exact type 
// within a particular block of code, allowing appropriate operations 
// based on that type.
function printALl(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    else {
        return false;
    }
}
// instace of narrowing
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString);
    }
    else {
        console.log(x.toUpperCase);
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish Food";
    }
    else {
        pet;
        return "Bird Food";
    }
}
function getTrueShape(Shape) {
    if (Shape.kind === "circle") {
        return Math.PI * Shape.radius ** 2;
    }
    // return Shape.side * Shape.side
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case 'rectangle':
            return shape.length * shape.width;
        default:
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}

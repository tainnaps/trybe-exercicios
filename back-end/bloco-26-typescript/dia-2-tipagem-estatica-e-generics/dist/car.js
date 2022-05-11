"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    honk() {
        console.log('HOOOOONK!');
    }
    openTheDoor(door) {
        console.log(`Open ${door}`);
    }
    closeTheDoor(door) {
        console.log(`Close ${door}`);
    }
    turnOn() {
        console.log('Car turned on!');
    }
    turnOff() {
        console.log('Car turned off!');
    }
    speedUp() {
        console.log('Car speeding up...');
    }
    speedDown() {
        console.log('Car speeding down...');
    }
    stop() {
        console.log('Car stopped.');
    }
    turn(direction) {
        console.log(`Car turning ${direction}...`);
    }
}
exports.default = Car;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const car_1 = __importDefault(require("./car"));
const types_1 = require("./types");
const car1 = new car_1.default('Volkswagen Gol', types_1.Colors.SILVER, 4);
car1.openTheDoor(types_1.Doors.DRIVER);
car1.closeTheDoor(types_1.Doors.DRIVER);
car1.turnOn();
car1.speedUp();
car1.speedDown();
car1.turn(types_1.Directions.LEFT);
car1.speedUp();
car1.speedDown();
car1.turn(types_1.Directions.RIGHT);
car1.speedUp();
car1.speedDown();
car1.turn(types_1.Directions.RIGHT);
car1.speedUp();
car1.speedDown();
car1.stop();
car1.openTheDoor(types_1.Doors.BEHIND_RIDE);
car1.closeTheDoor(types_1.Doors.BEHIND_RIDE);
car1.speedUp();
car1.speedDown();
car1.turn(types_1.Directions.RIGHT);
car1.speedUp();
car1.speedDown();
car1.turn(types_1.Directions.LEFT);
car1.speedUp();
car1.speedDown();
car1.turn(types_1.Directions.RIGHT);
car1.speedUp();
car1.speedDown();
car1.stop();
car1.openTheDoor(types_1.Doors.BEHIND_RIDE);
car1.closeTheDoor(types_1.Doors.BEHIND_RIDE);
car1.speedUp();
const pepperoni = {
    flavor: 'pepperoni',
    slices: 8,
};
console.log(pepperoni);
const marguerita = {
    flavor: 'marguerita',
    slices: 6,
};
console.log(marguerita);
const nutela = {
    flavor: 'nutela',
    slices: 4,
};
console.log(nutela);

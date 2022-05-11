import Car from './car';
import { Colors, Doors, Directions, Pizza } from './types';

const car1 = new Car('Volkswagen Gol', Colors.SILVER, 4);

car1.openTheDoor(Doors.DRIVER);
car1.closeTheDoor(Doors.DRIVER);
car1.turnOn();
car1.speedUp();
car1.speedDown();
car1.turn(Directions.LEFT);
car1.speedUp();
car1.speedDown();
car1.turn(Directions.RIGHT);
car1.speedUp();
car1.speedDown();
car1.turn(Directions.RIGHT);
car1.speedUp();
car1.speedDown();
car1.stop();
car1.openTheDoor(Doors.BEHIND_RIDE);
car1.closeTheDoor(Doors.BEHIND_RIDE);
car1.speedUp();
car1.speedDown();
car1.turn(Directions.RIGHT);
car1.speedUp();
car1.speedDown();
car1.turn(Directions.LEFT);
car1.speedUp();
car1.speedDown();
car1.turn(Directions.RIGHT);
car1.speedUp();
car1.speedDown();
car1.stop();
car1.openTheDoor(Doors.BEHIND_RIDE);
car1.closeTheDoor(Doors.BEHIND_RIDE);
car1.speedUp();


const pepperoni: Pizza = {
  flavor: 'pepperoni',
  slices: 8,
};

console.log(pepperoni);


const marguerita: Pizza = {
  flavor: 'marguerita',
  slices: 6,
};

console.log(marguerita);


const nutela: Pizza = {
  flavor: 'nutela',
  slices: 4,
};

console.log(nutela);

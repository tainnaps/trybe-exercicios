import Car from './car';
import { Colors, Doors, Directions, Pizza, SimplePizza, VeggiePizza, SweetPizza } from './types';

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

const frango: SimplePizza = {
  flavor: 'Frango',
  slices: 8,
}

console.log(frango);

const calabresa: SimplePizza = {
  flavor: 'Calabresa',
  slices: 6,
}

console.log(calabresa);

const palmito: VeggiePizza = {
  flavor: 'Palmito',
  slices: 6,
}

console.log(palmito);

const marshmallow: SweetPizza = {
  flavor: 'Marshmallow',
  slices: 4,
}

console.log(marshmallow);

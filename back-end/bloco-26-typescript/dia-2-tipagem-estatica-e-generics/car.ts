import { Colors, Doors, Directions } from './types';

class Car {
  brand: string;
  color: Colors;
  doors: number;

  constructor(brand: string, color: Colors, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void {
    console.log('HOOOOONK!');
  }

  openTheDoor(door: Doors): void {
    console.log(`Open ${door}`);
  }

  closeTheDoor(door: Doors): void {
    console.log(`Close ${door}`);
  }

  turnOn(): void {
    console.log('Car turned on!');
  }

  turnOff(): void {
    console.log('Car turned off!');
  }

  speedUp(): void {
    console.log('Car speeding up...');
  }

  speedDown(): void {
    console.log('Car speeding down...');
  }

  stop(): void {
    console.log('Car stopped.');
  }

  turn(direction: Directions): void {
    console.log(`Car turning ${direction}...`);
  }
}

export default Car;

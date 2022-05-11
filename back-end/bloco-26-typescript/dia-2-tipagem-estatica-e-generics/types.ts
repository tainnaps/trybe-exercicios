export enum Colors {
  BLACK = 'Black',
  RED = 'Red',
  WHITE = 'White',
  SILVER = 'Silver',
}

export enum Doors {
  DRIVER = 'driver\'s door',
  RIDE = 'ride\'s door',
  BEHIND_DRIVER = 'behind driver\'s door',
  BEHIND_RIDE = 'behind ride\'s door',
}

export enum Directions {
  RIGHT = 'right',
  LEFT = 'left',
}

export type Slices = 4 | 6 | 8;

export interface Pizza {
  flavor: string;
  slices: Slices;
}

export type Simple = 'Calabresa' | 'Frango' | 'Pepperoni';

export type Veggie = 'Marguerita' | 'Palmito' | 'Cogumelo';

export type Sweet = 'Nutela' | 'Goiabada com Queijo' | 'Marshmallow';

export interface SimplePizza extends Pizza {
  flavor: Simple;
}

export interface VeggiePizza extends Pizza {
  flavor: Veggie;
}

export interface SweetPizza extends Pizza {
  flavor: Sweet;
  slices: 4;
}

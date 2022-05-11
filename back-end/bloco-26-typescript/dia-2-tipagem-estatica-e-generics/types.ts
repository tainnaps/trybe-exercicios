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

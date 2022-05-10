export enum Meters {
  km = 1000,
  hm = 100,
  dam = 10,
  m = 1,
  dm = 0.1,
  cm = 0.01,
  mm = 0.001,
}

export type Unity = keyof typeof Meters;

export const convert = (value: number, baseUnity: Unity, convertUnity: Unity): number => {
  const baseMeter: Meters = Meters[baseUnity];
  const convertMeter: Meters = Meters[convertUnity];

  const convertedValue: number = value * (baseMeter / convertMeter);

  return convertedValue;
}

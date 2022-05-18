import { Months } from './exercise-2';
import { Seasons } from './exercise-3';
import readLineSync from 'readline-sync';

type X = {
  [key: string]: string[]
}
type Hemisphere = {
  [key: string]: X
}

const months: string[] = Object.values(Months);

const hemispheres: Hemisphere = {
  north: {
    [Seasons.AUTUMN]: [Months.SEPTEMBER, Months.OCTOBER, Months.NOVEMBER, Months.DECEMBER],
    [Seasons.WINTER]: [Months.DECEMBER, Months.JANUARY, Months.FEBRUARY, Months.MARCH],
    [Seasons.SPRING]: [Months.MARCH, Months.APRIL, Months.MAY, Months.JUNE],
    [Seasons.SUMMER]: [Months.JUNE, Months.JULY, Months.AUGUST, Months.SEPTEMBER]
  },
  south: {
    [Seasons.AUTUMN]: [Months.MARCH, Months.APRIL, Months.MAY, Months.JUNE],
    [Seasons.WINTER]: [Months.JUNE, Months.JULY, Months.AUGUST, Months.SEPTEMBER],
    [Seasons.SPRING]: [Months.SEPTEMBER, Months.OCTOBER, Months.NOVEMBER, Months.DECEMBER],
    [Seasons.SUMMER]: [Months.DECEMBER, Months.JANUARY, Months.FEBRUARY, Months.MARCH]
  }
}

const getUserHemisphere = (hemispheres: Hemisphere): string => {
  const hemisphereList: string[] = Object.keys(hemispheres);

  const selectedHemisphere: number = readLineSync.keyInSelect(Object.keys(hemispheres), 'Which hemisphere?');

  return hemisphereList[selectedHemisphere];
}

const getUserMonth = (months: string[]): string => {
  const selectedMonth: number = readLineSync.keyInSelect(months, 'Which month?');

  return months[selectedMonth];
}

const getSeasonsOfMonthByHemisphere = (months: string[], hemispheres: Hemisphere): string => {
  const hemisphere: string = getUserHemisphere(hemispheres);
  const month: string = getUserMonth(months);
  const hemisphereEntries: [string, string[]][] = Object.entries(hemispheres[hemisphere]);

  let seasonsOfMonth: string[] = [];

  for (let i: number = 0; i < hemisphereEntries.length; i += 1) {
    const [season, months]: [string, string[]] = hemisphereEntries[i];

    if (months.includes(month)) {
      seasonsOfMonth.push(season);
    }
  }

  return `Season(s) of ${month}: ${seasonsOfMonth}`;
}

console.log(getSeasonsOfMonthByHemisphere(months, hemispheres));

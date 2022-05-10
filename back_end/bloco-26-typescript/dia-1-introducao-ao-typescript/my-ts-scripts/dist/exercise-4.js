"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exercise_2_1 = require("./exercise-2");
const exercise_3_1 = require("./exercise-3");
const readline_sync_1 = __importDefault(require("readline-sync"));
const months = Object.values(exercise_2_1.Months);
const hemispheres = {
    north: {
        [exercise_3_1.Seasons.AUTUMN]: [exercise_2_1.Months.SEPTEMBER, exercise_2_1.Months.OCTOBER, exercise_2_1.Months.NOVEMBER, exercise_2_1.Months.DECEMBER],
        [exercise_3_1.Seasons.WINTER]: [exercise_2_1.Months.DECEMBER, exercise_2_1.Months.JANUARY, exercise_2_1.Months.FEBRUARY, exercise_2_1.Months.MARCH],
        [exercise_3_1.Seasons.SPRING]: [exercise_2_1.Months.MARCH, exercise_2_1.Months.APRIL, exercise_2_1.Months.MAY, exercise_2_1.Months.JUNE],
        [exercise_3_1.Seasons.SUMMER]: [exercise_2_1.Months.JUNE, exercise_2_1.Months.JULY, exercise_2_1.Months.AUGUST, exercise_2_1.Months.SEPTEMBER]
    },
    south: {
        [exercise_3_1.Seasons.AUTUMN]: [exercise_2_1.Months.MARCH, exercise_2_1.Months.APRIL, exercise_2_1.Months.MAY, exercise_2_1.Months.JUNE],
        [exercise_3_1.Seasons.WINTER]: [exercise_2_1.Months.JUNE, exercise_2_1.Months.JULY, exercise_2_1.Months.AUGUST, exercise_2_1.Months.SEPTEMBER],
        [exercise_3_1.Seasons.SPRING]: [exercise_2_1.Months.SEPTEMBER, exercise_2_1.Months.OCTOBER, exercise_2_1.Months.NOVEMBER, exercise_2_1.Months.DECEMBER],
        [exercise_3_1.Seasons.SUMMER]: [exercise_2_1.Months.DECEMBER, exercise_2_1.Months.JANUARY, exercise_2_1.Months.FEBRUARY, exercise_2_1.Months.MARCH]
    }
};
const getUserHemisphere = (hemispheres) => {
    const hemisphereList = Object.keys(hemispheres);
    const selectedHemisphere = readline_sync_1.default.keyInSelect(Object.keys(hemispheres), 'Which hemisphere?');
    return hemisphereList[selectedHemisphere];
};
const getUserMonth = (months) => {
    const selectedMonth = readline_sync_1.default.keyInSelect(months, 'Which month?');
    return months[selectedMonth];
};
const getSeasonsOfMonthByHemisphere = (months, hemispheres) => {
    const hemisphere = getUserHemisphere(hemispheres);
    const month = getUserMonth(months);
    const hemisphereEntries = Object.entries(hemispheres[hemisphere]);
    let seasonsOfMonth = [];
    for (let i = 0; i < hemisphereEntries.length; i += 1) {
        const [season, months] = hemisphereEntries[i];
        if (months.includes(month)) {
            seasonsOfMonth.push(season);
        }
    }
    return `Season(s) of ${month}: ${seasonsOfMonth}`;
};
console.log(getSeasonsOfMonthByHemisphere(months, hemispheres));

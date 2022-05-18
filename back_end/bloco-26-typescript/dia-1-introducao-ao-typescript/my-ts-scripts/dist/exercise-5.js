"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = exports.Meters = void 0;
var Meters;
(function (Meters) {
    Meters[Meters["km"] = 1000] = "km";
    Meters[Meters["hm"] = 100] = "hm";
    Meters[Meters["dam"] = 10] = "dam";
    Meters[Meters["m"] = 1] = "m";
    Meters[Meters["dm"] = 0.1] = "dm";
    Meters[Meters["cm"] = 0.01] = "cm";
    Meters[Meters["mm"] = 0.001] = "mm";
})(Meters = exports.Meters || (exports.Meters = {}));
const convert = (value, baseUnity, convertUnity) => {
    const baseMeter = Meters[baseUnity];
    const convertMeter = Meters[convertUnity];
    const convertedValue = value * (baseMeter / convertMeter);
    return convertedValue;
};
exports.convert = convert;

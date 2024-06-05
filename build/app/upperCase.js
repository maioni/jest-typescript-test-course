"use strict";
// upperCase.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStringInfo = exports.upperCase = exports.StringUtils = void 0;
class StringUtils {
    upperCase(word) {
        if (!word) {
            throw new Error("Invalid word argument input!");
        }
        return word.toUpperCase();
    }
    lowerCase(word) {
        return word.toLowerCase();
    }
}
exports.StringUtils = StringUtils;
function upperCase(word) {
    return word.toUpperCase();
}
exports.upperCase = upperCase;
function getStringInfo(arg) {
    return {
        lowerCase: arg.toLowerCase(),
        upperCase: arg.toUpperCase(),
        characters: Array.from(arg),
        length: arg.length,
        extraInfo: {},
    };
}
exports.getStringInfo = getStringInfo;

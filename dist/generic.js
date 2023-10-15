"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const returnValue = (value) => value;
const message = returnValue('hello World');
const cout = returnValue(5);
console.log(cout);
function getFirstValueFromArray(array) {
    return array[0];
}
const getFirstValuestriong = getFirstValueFromArray(["1", "2"]);
const getFirstValueNumber = getFirstValueFromArray([1, 2]);
///promise
const returnPromise = () => __awaiter(void 0, void 0, void 0, function* () {
    return "JP";
});
//classe
class GenericNumber {
    constructor(zero, sum) {
        this.zero = zero;
        this.sum = sum;
    }
}
const myGenericNumber = new GenericNumber(0, (x, y) => {
    return x + y;
});

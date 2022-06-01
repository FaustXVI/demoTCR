import {fizzBuzz} from "./fizzBuzz";

describe("fizzBuzz", () => {
    [1, 2].forEach(n => {
        it(`should echo in the default case ${n}`, () => {
            expect(fizzBuzz(n)).toEqual(`${n}`);
        });
    });
    [3, 6].forEach(n => {
        it(`should fizz for multiples of 3 (ex ${n})`, () => {
            expect(fizzBuzz(n)).toEqual("Fizz");
        });
    });
    [5, 10].forEach(n => {
        it(`should buzz for multiples of 5 (ex ${n})`, () => {
            expect(fizzBuzz(n)).toEqual("Buzz");
        });
    });
});


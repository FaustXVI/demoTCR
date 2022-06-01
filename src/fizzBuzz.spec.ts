import {fizzBuzz} from "./fizzBuzz";

describe("fizzBuzz", () => {
    [1, 2].forEach(n => {
        it(`should echo in the default case ${n}`, () => {
            expect(fizzBuzz(n)).toEqual(`${n}`);
        });
    });
    [3, 6].forEach(n => {
        it(`should fizz given a multiple of 3 (ex ${n})`, () => {
            expect(fizzBuzz(n)).toEqual("Fizz");
        });
    });
    [5].forEach(n => {
        it(`should buzz given a multiple of 5 (ex ${n})`, () => {
            expect(fizzBuzz(n)).toEqual("Buzz");
        });
    });
    [15, 30].forEach(n => {
        it(`should fizzbuzz given a multiple of 3 and 5 (ex ${n})`, () => {
            expect(fizzBuzz(n)).toEqual("FizzBuzz");
        });
    });
});


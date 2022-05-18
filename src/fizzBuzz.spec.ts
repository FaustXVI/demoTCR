import {fizzBuzz} from "./fizzBuzz";

describe("fizzBuzzBazz", () => {
    [1, 2, 4].forEach(n => {
        it(`should echo in the default case ${n}`, () => {
            expect(fizzBuzz(n)).toEqual(`${n}`);
        });
    });
    [3, 6, 9].forEach(n => {
        it(`should fizz given a multiple of 3 (ex ${n})`, () => {
            expect(fizzBuzz(n)).toEqual("Fizz");
        });
    });
    [5, 10, 20].forEach(n => {
        it(`should buzz given a multiple of 5 (ex ${n})`, () => {
            expect(fizzBuzz(n)).toEqual("Buzz");
        });
    });
});


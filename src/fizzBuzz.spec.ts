import {fizzBuzz} from "./fizzBuzz";

describe("fizzBuzzBazz", () => {
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
});


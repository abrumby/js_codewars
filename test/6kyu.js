import { assert } from 'chai'
import {
    splitStrings, moveZeros, isPrime, findOutlier
} from '../js/6kyu/app.js'

describe("Split Strings", () => {
    it("Basic tests", () => {
        assert.deepEqual(splitStrings("abcdef"), ["ab", "cd", "ef"]);
        assert.deepEqual(splitStrings("abcdefg"), ["ab", "cd", "ef", "g_"]);
        assert.deepEqual(splitStrings(""), []);
    });
});

describe("Tests", () => {
    it("test", () => {
        assert.deepEqual(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
    });
});

describe("Basic", ()=>{
    it("Basic tests", () => {

        assert.equal(isPrime(0),  false, "0 is not prime");
        assert.equal(isPrime(1),  false, "1 is not prime");
        assert.equal(isPrime(2),  true, "2 is prime");
        assert.equal(isPrime(73), true, "73 is prime");
        assert.equal(isPrime(75), false, "75 is not prime");
        assert.equal(isPrime(-1), false, "-1 is not prime");

    });

    it("Test prime", () => {

        assert.equal(isPrime(3),  true, "3 is prime");
        assert.equal(isPrime(5),  true, "5 is prime");
        assert.equal(isPrime(7),  true, "7 is prime");
        assert.equal(isPrime(41), true, "41 is prime");
        assert.equal(isPrime(5099), true, "5099 is prime");

    });

    it("Test not prime", () => {

        assert.equal(isPrime(4),  false, "4 is not prime");
        assert.equal(isPrime(6),  false, "6 is not prime");
        assert.equal(isPrime(8),  false, "8 is not prime");
        assert.equal(isPrime(9), false, "9 is not prime");
        assert.equal(isPrime(45), false, "45 is not prime");
        assert.equal(isPrime(-5), false, "-5 is not prime");
        assert.equal(isPrime(-8), false, "-8 is not prime");
        assert.equal(isPrime(-41), false, "-41 is not prime");

    });
});

describe("findOutlierTest", () => {
    it("Basic Tests", () => {
        assert.equal(findOutlier([0, 1, 2]), 1, 'test 1')
        assert.equal(findOutlier([1, 2, 3]), 2, 'test 2')
        assert.equal(findOutlier([2,6,8,10,3]), 3, 'test 3')
        assert.equal(findOutlier([0,0,3,0,0]), 3, 'test 4')
        assert.equal(findOutlier([1,1,0,1,1]), 0, 'test 5')
    });
});

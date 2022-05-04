import { assert } from 'chai'
import {
    splitStrings, moveZeros
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
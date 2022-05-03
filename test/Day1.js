import { assert } from 'chai'
import { expect } from 'chai'
import {reverseString, cockroachSpeed} from '../js/8kyu/Day1.js'


describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(reverseString('world'), 'dlrow')
        assert.strictEqual(reverseString('hello'), 'olleh')
        assert.strictEqual(reverseString(''), '')
        assert.strictEqual(reverseString('h'), 'h')
    });
});

describe("Basic Tests", function() {
    it("Testing for fixed tests", () => {
        assert.strictEqual(cockroachSpeed(1.08), 30);
        assert.strictEqual(cockroachSpeed(1.09), 30);
        assert.strictEqual(cockroachSpeed(0), 0);
    });
});

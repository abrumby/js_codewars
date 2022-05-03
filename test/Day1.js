import { assert } from 'chai'
import { expect } from 'chai'
import {reverseString} from '../js/8kyu/Day1.js'


describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(reverseString('world'), 'dlrow')
        assert.strictEqual(reverseString('hello'), 'olleh')
        assert.strictEqual(reverseString(''), '')
        assert.strictEqual(reverseString('h'), 'h')
    });
});
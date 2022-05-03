import { assert } from 'chai'
import {
    reverseString, cockroachSpeed, greet,
    isPalindrome, checkForFactor, gooseFilter
} from '../js/8kyu/Day1.js'


describe("Reverse string tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(reverseString('world'), 'dlrow')
        assert.strictEqual(reverseString('hello'), 'olleh')
        assert.strictEqual(reverseString(''), '')
        assert.strictEqual(reverseString('h'), 'h')
    });
})

describe("Cockroach Tests", function() {
    it("Testing for fixed tests", () => {
        assert.strictEqual(cockroachSpeed(1.08), 30);
        assert.strictEqual(cockroachSpeed(1.09), 30);
        assert.strictEqual(cockroachSpeed(0), 0);
    });
})

describe("Greeting Tests", () => {
    it("test", () => {
        assert.strictEqual(greet('english'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");
        assert.strictEqual(greet('dutch'), 'Welkom', "Your function should have returned 'Welkom'. Try again.");
        assert.strictEqual(greet('IP_ADDRESS_INVALID'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");
    });
})

describe("isPalindrome Tests", function() {
    it("Testing for 'a'", () => assert.strictEqual(isPalindrome("a"), true));
    it("Testing for 'aba'", () => assert.strictEqual(isPalindrome("aba"), true));
    it("Testing for 'Abba'", () => assert.strictEqual(isPalindrome("Abba"), true));
    it("Testing for 'hello'", () => assert.strictEqual(isPalindrome("hello"), false));
    it("Testing for 'Bob'", () => assert.strictEqual(isPalindrome("Bob"), true));
    it("Testing for 'Madam'", () => assert.strictEqual(isPalindrome("Madam"), true));
    it("Testing for 'AbBa'", () => assert.strictEqual(isPalindrome("AbBa"), true));
    it("Testing for ''", () => assert.strictEqual(isPalindrome(""), true));
})

describe('check for factor', function () {
    it('should return true', function () {
        assert.strictEqual(checkForFactor(10,2), true)
        assert.strictEqual(checkForFactor(63,7), true)
        assert.strictEqual(checkForFactor(2450,5), true)
        assert.strictEqual(checkForFactor(24612,3), true)
    })
    it('should return false', function () {
        assert.strictEqual(checkForFactor(9,2), false)
        assert.strictEqual(checkForFactor(653,7), false)
        assert.strictEqual(checkForFactor(2453,5), false)
        assert.strictEqual(checkForFactor(24617,3), false)
    })
})

describe("gooseFilter",function(){
    it("Mixed list",function(){
        assert.deepEqual(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]),["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);
    });
    it("No geese",function(){
        assert.deepEqual(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]),["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);
    });
    it("All geese",function(){
        assert.deepEqual(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]),[]);
    });
});
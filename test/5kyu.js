import { assert } from "chai"
import {
  validParentheses,
  productFib
} from "../js/5kyu/app.js"

describe("validParentheses Tests", () => {
  it(`values: "("`, () => assert.strictEqual(validParentheses("("), false, 'Test 1'));
  it(`values: ")"`, () => assert.strictEqual(validParentheses(")"), false, 'Test 2'));
  it(`values: ""`, () => assert.strictEqual(validParentheses(""), true, 'Test 3'));
  it(`values: "()"`, () => assert.strictEqual(validParentheses("()"), true, 'Test 4'));
  it(`values: "())"`, () => assert.strictEqual(validParentheses("())"), false, 'Test 5'));
  it(`values: ")()()()("`, () => assert.strictEqual(validParentheses("\")()()()(\""), false, 'Test 6'));
  it(`values: ")()("`, () => assert.strictEqual(validParentheses(")()("), false, 'Test 7'));
});

describe("productFib Tests", () => {
  it("test", () => {
    assert.deepEqual(productFib(4895), [55, 89, true], 'Test 1')
    assert.deepEqual(productFib(5895), [89, 144, false], 'Test 2')
    assert.deepEqual(productFib(74049690), [6765, 10946, true], 'Test 3')
    assert.deepEqual(productFib(84049690), [10946, 17711, false], 'Test 4')
    assert.deepEqual(productFib(193864606), [10946, 17711, true], 'Test 5')
    assert.deepEqual(productFib(447577), [610, 987, false], 'Test 6')
    assert.deepEqual(productFib(602070), [610, 987, true], 'Test 7')

  });
});

import { assert } from "chai"
import {
  validParentheses
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

import { assert } from "chai";
import {
  splitStrings,
  moveZeros,
  isPrime,
  findOutlier,
  tribonacci,
  humanReadable,
  comp,
} from "../js/6kyu/app.js";

describe("Split Strings", () => {
  it("Basic tests", () => {
    assert.deepEqual(splitStrings("abcdef"), ["ab", "cd", "ef"]);
    assert.deepEqual(splitStrings("abcdefg"), ["ab", "cd", "ef", "g_"]);
    assert.deepEqual(splitStrings(""), []);
  });
});

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(
      moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]),
      [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
    );
  });
});

describe("Basic", () => {
  it("Basic tests", () => {
    assert.equal(isPrime(0), false, "0 is not prime");
    assert.equal(isPrime(1), false, "1 is not prime");
    assert.equal(isPrime(2), true, "2 is prime");
    assert.equal(isPrime(73), true, "73 is prime");
    assert.equal(isPrime(75), false, "75 is not prime");
    assert.equal(isPrime(-1), false, "-1 is not prime");
  });

  it("Test prime", () => {
    assert.equal(isPrime(3), true, "3 is prime");
    assert.equal(isPrime(5), true, "5 is prime");
    assert.equal(isPrime(7), true, "7 is prime");
    assert.equal(isPrime(41), true, "41 is prime");
    assert.equal(isPrime(5099), true, "5099 is prime");
  });

  it("Test not prime", () => {
    assert.equal(isPrime(4), false, "4 is not prime");
    assert.equal(isPrime(6), false, "6 is not prime");
    assert.equal(isPrime(8), false, "8 is not prime");
    assert.equal(isPrime(9), false, "9 is not prime");
    assert.equal(isPrime(45), false, "45 is not prime");
    assert.equal(isPrime(-5), false, "-5 is not prime");
    assert.equal(isPrime(-8), false, "-8 is not prime");
    assert.equal(isPrime(-41), false, "-41 is not prime");
  });
});

describe("findOutlierTest", () => {
  it("Basic Tests", () => {
    assert.equal(findOutlier([0, 1, 2]), 1, "test 1");
    assert.equal(findOutlier([1, 2, 3]), 2, "test 2");
    assert.equal(findOutlier([2, 6, 8, 10, 3]), 3, "test 3");
    assert.equal(findOutlier([0, 0, 3, 0, 0]), 3, "test 4");
    assert.equal(findOutlier([1, 1, 0, 1, 1]), 0, "test 5");
  });
});

describe("tribonnaci tests", function () {
  assert.deepStrictEqual(
    tribonacci([1, 1, 1], 10),
    [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]
  );
  assert.deepStrictEqual(
    tribonacci([0, 0, 1], 10),
    [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]
  );
  assert.deepStrictEqual(
    tribonacci([0, 1, 1], 10),
    [0, 1, 1, 2, 4, 7, 13, 24, 44, 81]
  );
  assert.deepStrictEqual(
    tribonacci([1, 0, 0], 10),
    [1, 0, 0, 1, 1, 2, 4, 7, 13, 24]
  );
  assert.deepStrictEqual(
    tribonacci([0, 0, 0], 10),
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  );
  assert.deepStrictEqual(
    tribonacci([1, 2, 3], 10),
    [1, 2, 3, 6, 11, 20, 37, 68, 125, 230]
  );
  assert.deepStrictEqual(
    tribonacci([3, 2, 1], 10),
    [3, 2, 1, 6, 9, 16, 31, 56, 103, 190]
  );
  assert.deepStrictEqual(tribonacci([1, 1, 1], 1), [1]);
  assert.deepStrictEqual(tribonacci([300, 200, 100], 0), []);
  //assert.deepStrictEqual(tribonacci([0.5,0.5,0.5],30),[0.5,0.5,0.5,1.5,2.5,4.5,8.5,15.5,28.5,52.5,96.5,177.5,326.5,600.5,1104.5,2031.5,3736.5,6872.5,12640.5,23249.5,42762.5,78652.5,144664.5,266079.5,489396.5,900140.5,1655616.5,3045153.5,5600910.5,10301680.5])
});

describe("humanReadable", function () {
  it("should format correctly", function () {
    assert.strictEqual(humanReadable(0), "00:00:00", "humanReadable(0)");
    assert.strictEqual(humanReadable(59), "00:00:59", "humanReadable(59)");
    assert.strictEqual(humanReadable(60), "00:01:00", "humanReadable(60)");
    assert.strictEqual(humanReadable(90), "00:01:30", "humanReadable(90)");
    assert.strictEqual(humanReadable(3599), "00:59:59", "humanReadable(3599)");
    assert.strictEqual(humanReadable(3600), "01:00:00", "humanReadable(3600)");
    assert.strictEqual(
      humanReadable(45296),
      "12:34:56",
      "humanReadable(45296)"
    );
    assert.strictEqual(
      humanReadable(86399),
      "23:59:59",
      "humanReadable(86399)"
    );
    assert.strictEqual(
      humanReadable(86400),
      "24:00:00",
      "humanReadable(86400)"
    );
    assert.strictEqual(
      humanReadable(359999),
      "99:59:59",
      "humanReadable(359999)"
    );
  });
});

describe("comp Tests", () => {
  it("test", () => {
    let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
    let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
    assert.equal(comp(a1, a2), true, 'Test 1');
  });
});

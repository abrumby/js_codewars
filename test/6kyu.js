import { assert } from 'chai'
import { splitStrings
} from '../js/6kyu/app.js'

describe("Split Strings", () => {
    it("Basic tests", () => {
        assert.deepEqual(splitStrings("abcdef"), ["ab", "cd", "ef"]);
        assert.deepEqual(splitStrings("abcdefg"), ["ab", "cd", "ef", "g_"]);
        assert.deepEqual(splitStrings(""), []);
    });
});
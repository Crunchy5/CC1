import { describe, it, expect } from "vitest";
import { analyseThrowsOfDice } from "./index.js";

describe("Analyse dice throws", () => {
 
    it("if all same number", () => {
        expect(analyseThrowsOfDice([1, 1, 1, 1, 1], [1, 1, 1, 1, 1])).toBe(100);
    });

    it("same number four times", () => {
        expect(analyseThrowsOfDice([1, 1, 1, 1, 2], [1, 1, 1, 1, 2])).toBe(70);
    });

    it("only full", () => {
        expect(analyseThrowsOfDice([1, 1, 2, 2, 2], [1, 1, 2, 2, 2])).toBe(60);
    });

    it("only brelan", () => {
        expect(analyseThrowsOfDice([1, 3, 2, 2, 2], [1, 3, 2, 2, 2])).toBe(56);
    });

    it("one brelan and one full", () => {
        expect(analyseThrowsOfDice([1, 3, 2, 2, 2], [1, 1, 2, 2, 2])).toBe(58);
    });

});
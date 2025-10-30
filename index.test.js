import { describe, it, expect } from "vitest";
import { analyseThrowsOfDice } from "./index.js";

describe("Analyse dice throws", () => {
 
    it("if all same number", () => {
        expect(analyseThrowsOfDice([1, 1, 1, 1, 1])).toBe(50);
    });

});
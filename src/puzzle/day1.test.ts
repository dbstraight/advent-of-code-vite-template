import { expect, it } from "vitest";

import readData from "../data/readData";

import { part1, part2 } from "./day1";

it("solves part 1", async () => {
    const input = await readData(1);
    expect(part1(input)).toBe("24000");
});

it("solves part 2", async () => {
    const input = await readData(1);
    expect(part2(input)).toBe("45000");
});

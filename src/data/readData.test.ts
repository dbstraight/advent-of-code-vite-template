import { expect, it } from "vitest";

import readData from "./readData";

it("reads data", async () => {
    const data = await readData(1);
    expect(data).toMatch(/^\d+/);
});

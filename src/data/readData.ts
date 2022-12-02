import { readFile } from "node:fs/promises";

const readData = async (day: number) => {
    const text = await readFile(
        new URL(`day${day}.txt`, import.meta.url),
        {
            encoding: "utf8",
        }
    );
    return text;
};
export default readData;

import React, { useEffect, useState } from "react";

import fetchData from "../data/fetchData";

type PartSolver = {
    func: (input: string) => string
};

interface DayProps {
    day: number;
};

const Day = ({ day }: DayProps) => {
    const [ loaded, setLoaded ] = useState(false);
    const [ part1, setPart1 ] = useState<PartSolver>({
        func: () => ""
    });
    const [ part2, setPart2 ] = useState<PartSolver>({
        func: () => ""
    });
    const [ inputText, setInputText ] = useState("");
    const [ officialInputText, setOfficialInputText ] = useState("");

    let part1Answer = "";
    try {
        part1Answer = part1.func(inputText);
    }
    catch {}

    let part2Answer = "";
    try {
        part2Answer = part2.func(inputText);
    }
    catch {}

    useEffect(() => {
        (async () => {
            try {
                const { part1: p1, part2: p2 } = await import(`../puzzle/day${day}.ts`);
                setPart1({ func: p1 });
                setPart2({ func: p2 });
                const text = await fetchData(day);
                setOfficialInputText(text);
                setLoaded(true);
            }
            catch {}
        })();
    }, []);

    const handleTextareaChange: React.FormEventHandler<HTMLTextAreaElement> = (event) => {
        const element = event.target as HTMLTextAreaElement;
        setInputText(element.value);
    };

    const setToOfficialText = () => {
        setInputText(officialInputText);
    };

    return (
        <div>
            <h1 className="mt-12 mb-4 text-3xl">Day {day}</h1>
            {loaded && <div>
                <label>
                    Input
                    <textarea
                        className="w-full h-52 border p-2"
                        onInput={handleTextareaChange}
                        value={inputText}
                    />
                </label>
                {officialInputText &&
                    <button
                        className="border rounded w-full bg-zinc-100 border-zinc-200 my-2 p-2"
                        onClick={setToOfficialText}
                    >
                        Set to official text
                    </button>
                }
                <label className="block my-2">
                    Part 1
                    <input
                        className="block p-2 border border-zinc-300 rounded w-full bg-zinc-200"
                        readOnly={true}
                        value={part1Answer}
                    />
                </label>
                <label className="block my-2">
                    Part 2
                    <input
                        className="block p-2 border border-zinc-300 rounded w-full bg-zinc-200"
                        readOnly={true}
                        value={part2Answer}
                    />
                </label>
            </div>}
        </div>
    );
};
export default Day;

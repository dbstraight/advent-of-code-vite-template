# Advent of Code Vite Template

## How to get started

Make sure you're using latest LTS version of node and run `npm install`.

## How to add solutions each day

Each day, download your puzzle input and save it in `./src/data` with the name
`dayX.txt` where `X` is the relevant day, such as `day1.txt`.

Then make a module in `./src/puzzle` named `dayX.ts` where `X` is the relevant
day.

In that module, export functions called `part1` and `part2` which take an input
string and return a string.

Add tests by making a `dayX.test.ts` file in `./src/puzzle`.

Once you've solved a puzzle, it's good to add a test for the correct answer so
you can refactor and know your code is still working.

## How to run the interactive app

Run `npm run dev` to get an interactive app which dynamically includes whichever
days you have modules for in `./src/puzzle`.

The button labeled `Set to official text` in the app will load the text you
saved to the `dayX.txt` file.

## How to run tests

Just run `npm run test`.

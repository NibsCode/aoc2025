import getInput from "../../../utils/getInput";

const INPUT: string = getInput("2025", "1");

const part1 = () => {
    let dialNumber: number = 50;
    let password: number = 0;

    const moves: string[] = INPUT.split("\n");

    moves.forEach((move: string) => {
        const direction = move.charAt(0);
        const steps = parseInt(move.slice(1));

        if (direction === "L") {
            dialNumber = ((dialNumber - steps) % 100 + 100) % 100;
        } else if (direction === "R") {
            dialNumber = (dialNumber + steps) % 100;
        }

        if (dialNumber === 0) {
            password++;
        }
    });

    return password;
};

const part2 = () => {
    let dialNumber = 50;
    let password = 0;

    INPUT.split("\n").forEach(move => {
        const direction = move[0] === "L" ? -1 : 1;
        let steps = Number(move.slice(1));

        for (let i = 1; i <= steps; i++) {
            if (((dialNumber + direction * i) % 100 + 100) % 100 === 0) {
                password++;
            }
        }

        dialNumber = ((dialNumber + direction * steps) % 100 + 100) % 100;
    });

    return password;
};

console.log(`Solution 1: ${part1()}`);
console.log(`Solution 2: ${part2()}`);

import getInput from '../../../utils/getInput';

const INPUT: string = getInput("2025", "2");

const part1 = () => {
    return INPUT.split(',')
        .map(range => {
            const [start, end] = range.split('-').map(Number);
            return { start, end };
        })
        .flatMap(({ start, end }) =>
            Array.from({ length: end - start + 1 }, (_, i) => start + i)
        )
        .filter(num => {
            const numStr = num.toString();
            const len = numStr.length;
            if (len % 2 !== 0) return false;
            const half = len / 2;
            return numStr.slice(0, half) === numStr.slice(half);
        })
        .reduce((acc, curr) => acc + curr, 0);
}

const part2 = () => {
    return INPUT.split(',')
        .map(range => {
            const [start, end] = range.split('-').map(Number);
            return { start, end };
        })
        .flatMap(({ start, end }) =>
            Array.from({ length: end - start + 1 }, (_, i) => start + i)
        )
        .filter(num => {
            const numStr = num.toString();
            const len = numStr.length;
            for (let size = 1; size <= Math.floor(len / 2); size++) {
                if (len % size !== 0) continue;
                const part = numStr.slice(0, size);
                if (part.repeat(len / size) === numStr) {
                    return true;
                }
            }
            return false;
        })
        .reduce((acc, curr) => acc + curr, 0);
}

console.log(`Solution 1: ${part1()}`);
console.log(`Solution 2: ${part2()}`);
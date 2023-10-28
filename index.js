const example = [
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 0, 0],
];

const minesWeeper = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 0) {
                arr[i][j] = 1;
            } else if (arr[i][j] === 1) {
                arr[i][j] = 9;
            }
        }
    }
    return arr;
}

const modifiedExample = minesWeeper(example);
console.log(modifiedExample);

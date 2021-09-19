function doneOrNot(board) {
    let obj = { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0 };
    console.log(board)
    for (let i = 0; i < board.length; i++) {

        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 0 || board[j][i] === 0) {
                return "Try again!";
            } else {
                obj[board[i][j]] += 1;
                obj[board[j][i]] += 1;
            }
        }
    }
    console.log(board)
    for (key in obj) {
        if (obj[key] !== 2) {
            return "Try again!";
        }
    }
    return "Finished!";
}
console.log(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2],
[6, 7, 2, 1, 9, 5, 3, 4, 8],
[1, 9, 8, 3, 4, 2, 5, 6, 7],
[8, 5, 9, 7, 6, 1, 4, 2, 3],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 6, 1, 5, 3, 7, 2, 8, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 4, 5, 2, 8, 6, 1, 7, 9]]));

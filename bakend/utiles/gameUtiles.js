
function createdBoard() {
    const board = Array.from({ length: 24 }, () => ({ owner: null, checkers: 0 }))
    board[0].owner = "black"
    board[0].checkers = 2
    board[11].owner = "black"
    board[11].checkers = 5
    board[12].owner = "white"
    board[12].checkers = 5
    board[16].owner = "black"
    board[16].checkers = 3
    board[7].owner = "white"
    board[7].checkers = 3
    board[18].owner = "black"
    board[18].checkers = 5
    board[5].owner = "white"
    board[5].checkers = 5
    board[24] = {owner: "white", checkers: 2}
    return board
}






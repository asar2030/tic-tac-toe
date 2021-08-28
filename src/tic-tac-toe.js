class TicTacToe {
    constructor() {
        this.playerSymbol = 'x'
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ]
        this.winner = null
    }

    getCurrentPlayerSymbol() {
        return this.playerSymbol
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex]) {
            return;
        }
        this.field[rowIndex][columnIndex] = this.playerSymbol
        this.playerSymbol = this.playerSymbol === 'x' ? 'o' : 'x'

        if (this.field[0][0] === this.field[0][1] && this.field[0][1] === this.field[0][2]) this.winner = this.field[0][0]
        if (this.field[1][0] === this.field[1][1] && this.field[1][1] === this.field[1][2]) this.winner = this.field[1][0]
        if (this.field[2][0] === this.field[2][1] && this.field[2][1] === this.field[2][2]) this.winner = this.field[2][0]
        if (this.field[0][0] === this.field[1][0] && this.field[1][0] === this.field[2][0]) this.winner = this.field[0][0]
        if (this.field[0][1] === this.field[1][1] && this.field[1][1] === this.field[2][1]) this.winner = this.field[0][1]
        if (this.field[0][2] === this.field[1][2] && this.field[1][2] === this.field[2][2]) this.winner = this.field[0][2]
        if (this.field[0][0] === this.field[1][1] && this.field[1][1] === this.field[2][2]) this.winner = this.field[0][0]
        if (this.field[2][0] === this.field[1][1] && this.field[1][1] === this.field[0][2]) this.winner = this.field[2][0]
    }

    isFinished() {
        return this.noMoreTurns() || this.winner !== null;
    }

    getWinner() {
        return this.winner
    }

    noMoreTurns() {
        for (let k = 0; k < this.field.length; k++) {
            for (let l = 0; l < this.field[k].length; l++) {
              if (this.field[k][l] === null) return false;
            }
        } return true;
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner()
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex]
    }
}

module.exports = TicTacToe;


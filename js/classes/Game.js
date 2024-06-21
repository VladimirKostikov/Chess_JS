export class Game {
    constructor() {
        this.currentPlayerForMove = 'w';
        this.gameIsFinished = false
    }

    makeStep() {
        if(this.currentPlayerForMove == 'w')
            this.currentPlayerForMove = 'b'
        else
            this.currentPlayerForMove = 'w'
    }

    getCurrentPlayer() {
        return this.currentPlayerForMove
    }

    getGameStatus() {
        return this.gameIsFinished
    }

    finishGame() {
        this.gameIsFinished = true
    }
}
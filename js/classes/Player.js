import { Knight } from './figures/Knight.js'
import { Bishop } from './figures/Bishop.js'
import { Pawn } from './figures/Pawn.js'
import { Queen } from './figures/Queen.js'
import { Rook } from './figures/Rook.js'
import { King } from './figures/King.js'

export class Player {
    constructor() {
        this.currentFigures = 16
        this.score = 0

        this.figures = {
            King: new King(),
            Queen: new Queen(),
            Bishop: new Bishop(),
            Rook: new Rook(),  
            Knight: new Knight(),
            Pawn: new Pawn()
        }
    }

    showPossibleStepsForFigure(boardBlock, figure, team) {
        switch(figure) {
            case 'pawn': this.figures.Pawn.showPossibleWays(boardBlock, team); break;
            case 'knight': this.figures.Knight.showPossibleWays(boardBlock); break;
            case 'rook': this.figures.Rook.showPossibleWays(boardBlock); break;
        }
    }

    move(boardBlock, el) {
        boardBlock.makeMove(el)
        boardBlock.removeFigureFromBlock()
        boardBlock.removeTeamFromBlock()
        boardBlock.clearSelectedBlock()
    }

    attack(boardBlock, el) {

    }
}
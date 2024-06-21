import { BoardBlock } from "./BoardBlock.js";
export class FigureRender {
    constructor(team) {
        this.team = team;
    }

    renderFiguresForTeam() {
        switch(this.team) {
            case 'w':
                this.renderFiguresForWhiteTeam()
                break;

            case 'b':
                this.renderFiguresForBlackTeam()
                break;

            default:
                console.log('Incorrect team')
                break;
        }
    }

    renderFiguresForWhiteTeam() {
        let j = 6;
        this.renderPawn(j, this.team);
        this.renderAnotherFiguresWithoutPawn(j+1, this.team);
    }

    renderFiguresForBlackTeam() {
        let j = 1;
        this.renderPawn(j, this.team);
        this.renderAnotherFiguresWithoutPawn(j-1, this.team);
    }

    renderPawn(row, team) {
        let block;
        for(let i=0; i<8; i++) {
            block = new BoardBlock(`board_block_${row}_${i}`)
            block.setFigure('pawn',team)
        }
    }

    renderAnotherFiguresWithoutPawn(row, team) {
        let block;
        for(let i=0; i<8; i++) {
            block = new BoardBlock(`board_block_${row}_${i}`)
            
            switch(i) {
                case 0:
                case 7:
                    block.setFigure('rook',team)
                    break;
                
                case 1:
                case 6:
                    block.setFigure('knight',team)
                    break;

                case 2:
                case 5:
                    block.setFigure('bishop',team)
                    break;

                case 3:
                    block.setFigure('queen',team)
                    break;

                case 4:
                    block.setFigure('king',team)
                    break;
            }
        }
    }
}
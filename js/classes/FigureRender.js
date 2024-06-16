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
    }

    renderFiguresForBlackTeam() {
        let j = 1;
        this.renderPawn(j, this.team);
    }

    renderPawn(row, team) {
        let block;
        for(let i=0; i<8; i++) {
            block = new BoardBlock(`board_block_${row}_${i}`)
            block.setFigure('pawn',team)
        }
    }
}
import { Figure } from './Figure.js'

export class Pawn extends Figure {
    getFigureInfo() {
        return this.name
    }

    showPossibleWays(boardBlock,team) {
        let range = 1;
        let row, col, old_row = boardBlock.getRowOfSelectedBlock();
        if(team == 'w')
            range = -1;

        row = boardBlock.getRowOfSelectedBlock()+range;
        col = boardBlock.getColOfSelectedBlock();
        boardBlock.addPossibleWay(`board_block_${row}_${col}`)

        if(old_row == 6 || old_row == 1) {
            row = row+range;
            boardBlock.addPossibleWay(`board_block_${row}_${col}`)
        }
            
        boardBlock.showPossibleWays()
    }

    
}
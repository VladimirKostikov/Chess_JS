export class Rook {
    showPossibleWays(boardBlock) {
        this.getPossibleWaysInDirect(boardBlock, 'up')
        this.getPossibleWaysInDirect(boardBlock, 'down')
        this.getPossibleWaysInDirect(boardBlock, 'right')
        this.getPossibleWaysInDirect(boardBlock, 'left')

        boardBlock.showPossibleWays()
    }

    getPossibleWaysInDirect(boardBlock, direction) {
        let row = boardBlock.getRowOfSelectedBlock()
        let col = boardBlock.getColOfSelectedBlock()
        let curr_team = boardBlock.selected.dataset.team;
        let i = 1;
        let [step_row, step_col] = this.getStepForColsAndRows(direction);

        while(i < 8) {
            let el = `board_block_${row+step_row}_${col+step_col}`;

            console.log(el)

            if(boardBlock.getTeamOfTheBlock(el) == curr_team)
                break;
            
            if(boardBlock.getTeamOfTheBlock(el) != curr_team && boardBlock.getTeamOfTheBlock(el) != 0) {
                boardBlock.addPossibleWay(el);
                break;
            }

            if(step_col < 0 && step_row == 0)
                step_col -= 1;
            
            if(step_col > 0 && step_row == 0) {
                step_col += 1;
            }

            if(step_row < 0 && step_col == 0)
                step_row -= 1;

            if(step_row > 0 && step_col == 0) {
                step_row += 1;
            }

            boardBlock.addPossibleWay(el);
            i++;
        }

    }

    getStepForColsAndRows(direction) {
        switch(direction) {
            case 'up':
                return [-1, 0];
            case 'down':
                return [1, 0];
            case 'right':
                return [0, 1];
            case 'left':
                return [0, -1];
        }
    }
}
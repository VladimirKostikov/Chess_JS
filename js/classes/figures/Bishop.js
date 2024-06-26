export class Bishop {
    showPossibleWays(boardBlock) {
        let row = boardBlock.getRowOfSelectedBlock()
        let col = boardBlock.getColOfSelectedBlock()

        let i;
        let el;
        for(i=1; i<8; i++) {
            el = `board_block_${row+i}_${col+i}`;
            if(el != null && this.validateBlock(boardBlock, el)) {
                boardBlock.addPossibleWay(el)
                if(boardBlock.getTeamOfTheBlock(el) != 0)
                    break
            }
            else
                break;
        }

        for(i=1; i<8; i++) {
            el = `board_block_${row+i}_${col-i}`;
            if(el != null && this.validateBlock(boardBlock, el)) {
                boardBlock.addPossibleWay(el)
                if(boardBlock.getTeamOfTheBlock(el) != 0)
                    break
            }
            else
                break;
        }
        
        for(i=1; i<8; i++) {
            el = `board_block_${row-i}_${col+i}`;
            if(el != null && this.validateBlock(boardBlock, el)) {
                boardBlock.addPossibleWay(el)
                if(boardBlock.getTeamOfTheBlock(el) != 0)
                    break
            }
            else
                break;
        }
        
        for(i=1; i<8; i++) {
            el = `board_block_${row-i}_${col-i}`;
            if(el != null && this.validateBlock(boardBlock, el)) {
                boardBlock.addPossibleWay(el)
                if(boardBlock.getTeamOfTheBlock(el) != 0)
                    break
            }
            else
                break;
        }
           
        
        boardBlock.showPossibleWays()
    }

    validateBlock(boardBlock, el) {
        let curr_team = boardBlock.selected.dataset.team;
        if(boardBlock.getTeamOfTheBlock(el) == curr_team)
            return false;

        return true;
    }
}
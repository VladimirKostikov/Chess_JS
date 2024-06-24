export class Knight {
    showPossibleWays(boardBlock) {
        let row = boardBlock.getRowOfSelectedBlock()
        let col = boardBlock.getColOfSelectedBlock()

        boardBlock.addPossibleWay(`board_block_${row-2}_${col-1}`)
        boardBlock.addPossibleWay(`board_block_${row-2}_${col+1}`)
        boardBlock.addPossibleWay(`board_block_${row+2}_${col-1}`)
        boardBlock.addPossibleWay(`board_block_${row+1}_${col+2}`)
        boardBlock.addPossibleWay(`board_block_${row-1}_${col+2}`)
        boardBlock.addPossibleWay(`board_block_${row+1}_${col-2}`)
        boardBlock.addPossibleWay(`board_block_${row-1}_${col-2}`)

        boardBlock.showPossibleWays()
    }
}
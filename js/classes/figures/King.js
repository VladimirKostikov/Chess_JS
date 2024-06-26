export class King {
    showPossibleWays(boardBlock) {
        let row = boardBlock.getRowOfSelectedBlock()
        let col = boardBlock.getColOfSelectedBlock()

        boardBlock.addPossibleWay(`board_block_${row+1}_${col+1}`)
        boardBlock.addPossibleWay(`board_block_${row+1}_${col-1}`)
        boardBlock.addPossibleWay(`board_block_${row+1}_${col}`)
        boardBlock.addPossibleWay(`board_block_${row-1}_${col+1}`)
        boardBlock.addPossibleWay(`board_block_${row}_${col+1}`)
        boardBlock.addPossibleWay(`board_block_${row}_${col-1}`)
        boardBlock.addPossibleWay(`board_block_${row-1}_${col}`)
        boardBlock.addPossibleWay(`board_block_${row-1}_${col-1}`)
        boardBlock.addPossibleWay(`board_block_${row}_${col-1}`)
        boardBlock.addPossibleWay(`board_block_${row-1}_${col}`)

        boardBlock.showPossibleWays()
    }
}
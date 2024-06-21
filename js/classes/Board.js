export class Board {
    constructor(element) {
        this.element = document.querySelector(element);
    }

    create() {
        let row;

        for(let i=0; i<8; i++) {
            row = this.createRow(this.element, i);
            for(let j=0; j<8; j++) {
                this.createCol(row, i, j);     
            }
        }
    }

    createRow(elementOfBoard, id) {
        let el = document.createElement('div');

        el.classList.add('board-row');
        elementOfBoard.appendChild(el);

        return el;
    }

    createCol(row, row_num, col_num) {
        let el = document.createElement('div');

        el.classList.add('board-el')
        el.setAttribute('id',`board_block_${row_num}_${col_num}`)
        el.setAttribute('data-figure','0')
        el.setAttribute('data-team','0')
        el.setAttribute('data-row',row_num)
        el.setAttribute('data-col',col_num)
        
        row.appendChild(el);
    }

    getBoardElements() {
        return [...document.querySelectorAll('.board-el')]
    }
}
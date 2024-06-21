import { Pieces } from '../modules/Pieces.js'
export class BoardBlock {
    constructor(id) {
        this.block = id
        this.selected = 0
        this.possibleWays = []
    }

    setFigure(figure, team) {
        switch(figure) {
            case 'pawn':
            case 'bishop':
            case 'rook':
            case 'knight':
            case 'king':
            case 'queen':
                this.setBoardBlockData(figure, team)
                this.setBoardBlockHTMLFigure(figure, team)
                break;
            
            default:
                console.log('Incorrect figure')
                break;
        }
    }

    setBoardBlockData(figure, team) {
        let el = document.getElementById(this.block)
        
        el.setAttribute("data-figure", figure); 
        el.setAttribute("data-team", team); 

    }

    setBoardBlockHTMLFigure(figure, team) {
        let el = document.getElementById(this.block)
        
        el.innerHTML = Pieces[team][figure]
    }
    
    selectBlock(id) {
        if(this.selected != 0)
            this.clearSelectedBlock()
        this.selected = document.getElementById(id);
        this.setColorSelectedBlock();
    }

    clearSelectedBlock() {
        this.clearPossibleWays()
        this.possibleWays = []
        this.selected.classList.remove('block-selected')
    }

    clearPossibleWays() {
        this.getPossibleWays().forEach((el) => {
            document.getElementById(el).classList.remove('block-way')
        })
    }

    setColorSelectedBlock() {
        this.selected.classList.add('block-selected');
    }

    addPossibleWay(item) {
        this.possibleWays.push(item)
    }

    getPossibleWays() {
        return this.possibleWays;
    }

    showPossibleWays() {
        this.getPossibleWays().forEach((el) => {
            let block = document.getElementById(el)
            block.classList.add('block-way')
        })
    }

    getColOfSelectedBlock() {
        return Number(this.selected.dataset.col)
    }

    getRowOfSelectedBlock() {
        return Number(this.selected.dataset.row)
    }

}
import { Pieces } from '../modules/Pieces.js'
export class BoardBlock {
    constructor(id) {
        this.block = id
        this.selected = 0
        this.possibleWays = []
    }

    removeFigureFromBlock() {
        this.selected.dataset.figure = 0
    }

    removeTeamFromBlock() {
        this.selected.dataset.team = 0
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

    setColorSelectedBlock() {
        this.selected.classList.add('block-selected');
    }

    addPossibleWay(item) {
        let block = document.getElementById(item);
        if(block != null && block.dataset.team != this.selected.dataset.team)
            this.possibleWays.push(item)
    }

    getPossibleWays() {
        return this.possibleWays;
    }

    showPossibleWays() {
        this.getPossibleWays().forEach((el) => {
            let block = document.getElementById(el)
            if(block != null) {
                block.classList.add('block-way')
                if(block.dataset.team != this.selected.dataset.team && block.dataset.team != 0)
                    block.classList.add('block-attack')
            }
        })
    }

    clearPossibleWays() {
        this.getPossibleWays().forEach((el) => {
            let block = document.getElementById(el);
            if(block != null) {
                block.classList.remove('block-attack')
                block.classList.remove('block-way')
            }
        })
    }

    getColOfSelectedBlock() {
        return Number(this.selected.dataset.col)
    }

    getRowOfSelectedBlock() {
        return Number(this.selected.dataset.row)
    }


    makeMove(el) {
        el.dataset.team = this.selected.dataset.team;
        el.dataset.figure = this.selected.dataset.figure;
        this.block = el.id;
        this.setFigure(el.dataset.figure, el.dataset.team);

        this.selected.innerHTML = '';
        
    }

}
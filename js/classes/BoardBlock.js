import { Pieces } from '../modules/Pieces.js'
export class BoardBlock {
    constructor(id) {
        this.block = id
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
                console.log('Incorrect figure');
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

}
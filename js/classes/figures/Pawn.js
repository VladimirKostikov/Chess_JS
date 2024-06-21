import { Figure } from './Figure.js'

export class Pawn extends Figure {
    getFigureInfo() {
        return this.name
    }
}
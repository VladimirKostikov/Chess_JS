import { Knight } from './figures/Knight.js'
import { Bishop } from './figures/Bishop.js'
import { Pawn } from './figures/Pawn.js'
import { Queen } from './figures/Queen.js'
import { Rook } from './figures/Rook.js'
import { King } from './figures/King.js'

export class Player {
    constructor() {
        this.currentFigures = 16
        this.score = 0

        this.figures = {
            King: new King('K'),
            Queen: new Queen('Q'),

            Bishops: {
                Bishop_1: new Bishop('B1'),
                Bishop_2: new Bishop('B2')
            },

            Rooks: {
                Rook_1: new Rook('R1'),
                Rook_2: new Rook('R2'),
            },

            Knights: {
                Knight_1: new Knight('Kn1'),
                Knight_2: new Knight('Kn2'),
            },

            Pawns: {
                Pawn_1: new Pawn('P1'),
                Pawn_2: new Pawn('P2'),
                Pawn_3: new Pawn('P3'),
                Pawn_4: new Pawn('P4'),
                Pawn_5: new Pawn('P5'),
                Pawn_6: new Pawn('P6'),
                Pawn_7: new Pawn('P7'),
                Pawn_8: new Pawn('P8'),
            }
        }
    }
}
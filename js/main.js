import { Board } from './classes/Board.js'
import { BoardBlock } from './classes/BoardBlock.js'
import { Game } from './classes/Game.js'
import { Player } from './classes/Player.js'
import { Figure } from './classes/Figure.js'
import { FigureRender } from './classes/FigureRender.js'

import { Pieces } from './modules/Pieces.js'

let game = new Board('#game_board')
let figures_white = new FigureRender('w');
let figures_black = new FigureRender('b');

game.create();
figures_white.renderFiguresForWhiteTeam();
figures_black.renderFiguresForBlackTeam();

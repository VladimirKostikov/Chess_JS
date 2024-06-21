import { Board } from './classes/Board.js'
import { BoardBlock } from './classes/BoardBlock.js'
import { Game } from './classes/Game.js'
import { Player } from './classes/Player.js'
import { FigureRender } from './classes/FigureRender.js'

import { Pieces } from './modules/Pieces.js'

let board = new Board('#game_board')
let figures_white = new FigureRender('w');
let figures_black = new FigureRender('b');

board.create();
figures_white.renderFiguresForWhiteTeam();
figures_black.renderFiguresForBlackTeam();

let team_white = new Player()
let team_black = new Player()
let game = new Game();

let board_els = board.getBoardElements();

board_els.forEach((el) => {
    el.addEventListener('click',function() {
        
    });
});
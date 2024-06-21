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

let boardBlock = new BoardBlock;
let boardEls = board.getBoardElements();

boardEls.forEach((el) => {
    el.addEventListener('click',function(e) {
        if(el.dataset.figure != 0 && el.dataset.team == game.getCurrentPlayer()) {
            boardBlock.selectBlock(el.id)
            
            switch(game.getCurrentPlayer()) {
                case 'w':
                    team_white.showPossibleStepsForFigure(boardBlock, el.dataset.figure, el.dataset.team)
                    break;
                case 'b':
                    team_black.showPossibleStepsForFigure(boardBlock, el.dataset.figure, el.dataset.team)
                    break;
            }
        }
    });
});
import KeyControl from '../pop/controls/KeyControls.js';
import pop from '../pop/index.js';

const { Game } = pop;

import GameScreen from "./screens/GameScreen.js"

const game = new Game(640, 480)
const controls = new KeyControl()

game.scene = new GameScreen(game, controls)

game.run(() => {
    
})

game.run()

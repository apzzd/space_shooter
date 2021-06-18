
import pop from '../pop/index.js';
import Squizz from "./entities/Squizz.js"

const { Game, Sprite, Texture, Container, MouseControl, TileMap, math } = pop;



const game = new Game(640, 320);
const mouse = new MouseControl(game.renderer.view);
const { scene, w, h } = game;


// const squizz = new Squizz()
// squizz.pos.x = 200
// squizz.pos.y = 200
// scene.add(squizz)


game.run()

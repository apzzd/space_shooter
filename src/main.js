
import KeyControl from '../pop/controls/KeyControls.js';
import pop from '../pop/index.js';
import Level from '../pop/Level.js';
import Squizz from "./entities/Squizz.js"

const { Game, Sprite, Texture, Container, MouseControl, TileMap, math } = pop;



const game = new Game(640, 320);
const mouse = new MouseControl(game.renderer.view);
const { scene, w, h } = game;
// const squizz = new Squizz()
// squizz.pos.x = 200
// squizz.pos.y = 200
// scene.add(squizz)

const texture = new Texture("res/tiles.png")

const controls = new KeyControl()
const level = new Level(w, h)
const squizz = new Squizz(controls)
squizz.pos.x = 50
squizz.pos.y = 50
scene.add(level)
scene.add(squizz)








game.run()

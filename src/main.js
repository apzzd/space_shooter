
import Camera from '../pop/Camera.js';
import KeyControl from '../pop/controls/KeyControls.js';
import pop from '../pop/index.js';
import Level from '../pop/Level.js';
import Squizz from "./entities/Squizz.js"

const { Game, Sprite, Texture, Container, MouseControl, TileMap, math, entity } = pop;



const game = new Game(640, 320);
// const mouse = new MouseControl(game.renderer.view);
const { scene, w, h } = game;
// const squizz = new Squizz()
// squizz.pos.x = 200
// squizz.pos.y = 200
// scene.add(squizz)

const texture = new Texture("res/tiles.png")

const controls = new KeyControl()
const level = new Level(w * 2, h * 2)
const squizz = new Squizz(controls)
const camera = new Camera(
    squizz,
    {w, h},
    {w: level.w, h: level.h})

scene.add(camera)
camera.add(level)
camera.add(squizz)

console.log(squizz)

game.run(() => {
    const {pos} = squizz
    const {bounds: {top, bottom, left, right}} = level
    pos.x = math.clamp(pos.x, left, right)
    pos.y = math.clamp(pos.y, top, bottom)
    const ground = level.checkGround(entity.center(squizz))
})

game.run()

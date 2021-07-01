
import Camera from '../pop/Camera.js';
import KeyControl from '../pop/controls/KeyControls.js';
import pop from '../pop/index.js';
import Level from '../pop/Level.js';
import Squizz from "./entities/Squizz.js"
import Baddie from "./entities/Baddie.js"

const { Game, Sprite, Texture, Container, MouseControl, TileMap, math, entity } = pop;

function addBaddies(level) {
    const baddies = new Container()
    for (let i = 1; i < 3; i++) {
        const b = baddies.add(new Baddie(32*5, 0))
        b.pos.y = Math.floor(level.h/5) * i + level.tileH
    }
    for (let i = 1; i < 6; i++) {
        const b = baddies.add(new Baddie(0, 32*5))
        b.pos.x = Math.floor(level.w/10) * i + level.tileW
    }
    return baddies
}

function updateBaddies() {
    baddies.map(b => {
        const {pos} = b
        if (entity.distance(squizz, b) < 32) {
            squizz.dead = true
            if (b.xSpeed) pos.x = -level.w
            else pos.y = -level.h
        }
        if (pos.x > level.w) pos.x = -32
        if (pos.y > level.h) pos.y = -32
    })
}




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
const baddies = addBaddies(level)
const camera = new Camera(
    squizz,
    {w, h},
    {w: level.w, h: level.h})

console.log
scene.add(camera)
camera.add(level)
camera.add(squizz)
camera.add(baddies)

console.log(squizz)

game.run(() => {
    const {pos} = squizz
    const {bounds: {top, bottom, left, right}} = level
    pos.x = math.clamp(pos.x, left, right)
    pos.y = math.clamp(pos.y, top, bottom)
    const ground = level.checkGround(entity.center(squizz))
    updateBaddies()
})

game.run()

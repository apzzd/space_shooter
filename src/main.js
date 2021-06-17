
import pop from '../pop/index.js';
import TileSprite from '../pop/TileSprite.js';
import math from '../utils/math.js';
import Squizz from "./entities/Squizz.js"

const { Game, Sprite, Texture, Container, MouseControl } = pop;



const game = new Game(640, 320);
const mouse = new MouseControl(game.renderer.view);
const { scene, w, h } = game;



const {anims} = this
anims.add("walk", [0, 1, 2, 3].map(x=>({x, y: 0})), 0.07)

const texture = new Texture("res/player-walk.png")
const squizz = new TileSprite(texture, 40, 32)
const balls = scene.add(new Container())
for (let i = 0; i < 100; i++) {
	const squizz = balls.add(new Squizz(math.rand(3)))
	squizz.pos.x = math.rand(w)
	squizz.pos.y = math.rand(h)
}


game.run((dt, t)=> {

	console.log(mouse.justPressed)

	const {justPressed, pos} = mouse

	balls.map(b => {
		if (b.pos.x > w) {
			b.pos.x = -32
			b.speed *= 1.1
		}
		if (justPressed && math.distance(pos, b.pos) < 16){
			if (b.speed > 0) {
				b.speed = 0
			} else {
				b.dead = true
			}
		}


	})

	mouse.update()
	squizz.frame.x = Math.floor(t/0.1) % 3
	
})
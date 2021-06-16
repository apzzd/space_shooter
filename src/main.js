
import pop from '../pop/index.js';
import TileSprite from '../pop/TileSprite.js';
import math from '../utils/math.js';

const { Game, Sprite, Texture, Container, KeyControl } = pop;

const controls = new KeyControl();
const game = new Game(640, 320);

const { scene, w, h } = game;

const textures = {
	background: new Texture("res/bg.png"),
	spaceship: new Texture("res/spaceship.png"),
	bullet: new Texture("res/bullet.png"),
	baddie: new Texture("res/baddie.png"),
	explo: new Texture("res/explosion.png"),
	building: new Texture("res/building.png")
}

const texture = new Texture("res/player-walk.png")
const squizz = new TileSprite(texture, 32, 32)

scene.add(squizz)
game.run(()=> {
	squizz.frame.x = math.rand(3)
})
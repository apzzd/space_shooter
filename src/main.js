
import pop from '../pop/index.js';
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

scene.add(new Sprite(textures.background));

const ship = new Sprite(new Texture("res/spaceship.png"));
ship.pos = { x: 80, y: 120 };
ship.update = function(dt, t) {
	const { scale } = this;
	const { pos } = this;
	pos.x += controls.x * dt * 200;
	pos.y += controls.y * dt * 200;

	if (controls.x > 0) ship.flipped = false
	if (controls.x < 0) ship.flipped = true

	if (pos.x < 0) pos.x = 0;
	if (pos.x > w) pos.x = w;
	if (pos.y < 0) pos.y = 0;
	if (pos.y > (h-40)) pos.y = h - 40;
	// scale.x = Math.abs(Math.sin(10.5 * t)) + 1;
	// scale.y = Math.abs(Math.cos(3.2 * t)) + 1;
}


const buildings = scene.add(new Container());
const makeRandom = (b, x) => {
	console.log(x)
	b.scale.x = math.randf(1,3);
	b.scale.y = math.randf(1,3);
	b.pos.x = x;
	b.pos.y = h - b.scale.y * 64;
}

for (let x = 0; x < 20; x++) {
	const b = buildings.add(new Sprite(textures.building));
	makeRandom(b, math.rand(w));
}

scene.add(ship);



game.run((dt, t) => {
	buildings.map(b => {
		b.pos.x -= 100 * dt;
		if (b.pos.x < -80) {
			makeRandom(b, w);
		}
	})
})


import pop from "../pop/index.js"
import math from "../utils/math.js"
import KeyControl from "../pop/controls/KeyControls.js"

const { Game, Sprite, Texture, Container } = pop

const game = new Game(640, 320)
const { scene, w, h } = game
const controls = new KeyControl();


const textures = {
	background: new Texture("res/bg-2.png"),
	spaceship: new Texture("res/alien.png"),
	bullet: new Texture("res/bullet.png"),
	baddie: new Texture("res/baddie.png"),
	explo: new Texture("res/explosion.png"),
    building: new Texture("res/building.png")
}

scene.add(new Sprite(textures.background))

const ship = new Sprite(textures.spaceship)
ship.pos = {x:80, y: 120}
ship.update = function(dt, t) {
    //wobbly ship
    const { scale } = this
    const { pos } = this;
    // scale.x = Math.abs(Math.sin(t))+1
    // scale.y = Math.abs(Math.sin(t * 1.33))+1
    pos.y += controls.y * dt * 200;
    /// boundaries
    if (pos.y < 0) pos.y = 0;
	if (pos.y > (h-40)) pos.y = h - 40;

}

const buildings = scene.add(new Container())
const makeRandom = (b, x) => {
    // console.log(x)
    b.scale.x = math.randf(1,3)
    b.scale.y = math.randf(1, 3)
    b.pos.x = x
    b.pos.y = h - b.scale.y * 64 

}

for (let x=0; x < 50; x++) {
    const b = buildings.add(new Sprite(textures.building))
    makeRandom(b, math.rand(w))
}


scene.add(ship)



const baddies = new Container();

function spawnBaddie(x, y, speed, t) {
	const baddie = new Sprite(textures.baddie);
	baddie.pos.x = x;
	baddie.pos.y = y;
	baddie.vy = 0;
	baddie.lastChangeY = t;
	baddie.update = function(dt) {
		this.pos.x += speed * dt;
		this.pos.y += this.vy * dt;
	};
	baddie.size = 1 - (Math.random() * 0.5);
	baddies.add(baddie);
}

let lastSpawn = 0;
let spawnSpeed = 2.5;
scene.add(baddies);


game.run((dt, t) => {
    buildings.map(b => {
        b.pos.x -= 100 * dt
        if (b.pos.x < -80) {
            makeRandom(b, w)
        }

        if (t - lastSpawn > spawnSpeed) {
            lastSpawn = t;
            const speed = -250 - (Math.random() * Math.random() * 100);
            const position = Math.random() * (h - 24);
            spawnBaddie(w, position, speed, t);
    
            spawnSpeed = spawnSpeed < 0.05 ? 0.6 : spawnSpeed * 0.97 + 0.001;
        }
    })
})
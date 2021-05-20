import pop from "../pop/index.js"

const { Game, Sprite, Texture, Container } = pop

const game = new Game(640, 320)
const { scene, w, h } = game

const ship = new Sprite(new Texture("res/spaceship.png"))
ship.pos = {x:80, y: 120}
ship.update = function(dt, t) {
    //wobbly ship
    const { scale } = this
    scale.x = Math.abs(Math.sin(t))+1
    scale.y = Math.abs(Math.sin(t * 1.33))+1
}

const buildings = scene.add(new Container())
const makeRandom = (b, x) => {

    //

}




scene.add(ship)

game.run((dt, t) => {
    buildings.map(b => {
        b.pos.x -= 100 * dt
        if (b.pos.x < -80) {
            makeRandom(b, w)
        }
    })
})
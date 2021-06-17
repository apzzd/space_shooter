import pop from "../../pop/index.js"
import math from "../../utils/math.js"
const  {TileSprite, Texture} = pop
const texture = new Texture("res/player-walk.png")

class Squizz extends TileSprite {
    constructor(sf = 0) {
        super(texture, 32, 32)
        this.anchor = {x: -16, y: -16}
        this.sf = sf
        this.rate = 1
        this.curTime = 0
        this.curFrame = 0
        this.speed = math.rand(20, 100)
        this.type = math.rand(2)
        this.frames = [
            {x: 0, y: this.type},
            {x: 1, y: this.type},
            {x: 2, y: this.type},
            {x: 3, y: this.type}

        ]
        this.frame = this.frames[this.curFrame]

    }
    update(dt, t) {
        this.frame.x = (Math.floor(t / 0.1) + this.sf) % 4
        const {pos, speed, rate, frames} = this
        pos.x += speed * dt
        this.curTime += dt
        if (this.curTime > rate) {
            this.frame = frames[this.curFrame ++ % frames.length]
            this.curTime -= rate
        }
    }
}
export default Squizz
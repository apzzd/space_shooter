import pop from "../../pop/index.js"
import math from "../../utils/math.js"

const  {TileSprite, Texture} = pop
const texture = new Texture("res/player-walk.png")

class Squizz extends TileSprite {
    constructor(sf = 0) {
        super(texture, 32, 32)
        this.anchor = {x: -16, y: -16}
        this.sf = sf
        
        const anims = this.anims
        anims.add("walk", [0, 1, 2, 3].map(x=>({x, y: 0})), 0.07)
        anims.add("idle", [{x: 0, y:0}, {x: 4, y: 0}, {x: 4, y: 1}, {x:4, y:0}], 0.2)
        
        anims.play("idle")

    }
    update(dt, t) {
       super.update(dt, t)
       console.log(this.anims.frameSource)
    }
}
export default Squizz
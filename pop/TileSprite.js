import Sprite from "./Sprite.js"
import AnimManager from "./AnimManager.js"

class TileSprite extends Sprite {
    constructor (texture, w, h) {
        super(texture)
        this.tileW = w 
        this.anims = new AnimManager(this)
        this.tileH = h
        this.frame = {x:0, y:0}  
    }
    
}

export default TileSprite